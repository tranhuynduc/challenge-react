import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import fetch from 'isomorphic-fetch';

import { summaryDonations } from '../../helpers';
import { Container, Main, Row } from '../../components/Layout';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Payment from '../../components/Payment';
import { Text } from '../../components/Typography';

export default connect((state) => state)(
  class App extends Component {
    constructor(props) {
      super();

      this.state = {
        charities: [],
        selectedAmount: {},
        selectedPaymentID: null,
      };
    }

    componentDidMount() {
      const self = this;
      fetch('http://localhost:3001/charities')
        .then(function (resp) { return resp.json(); })
        .then(function (data) {
          self.setState({ charities: data })
        });

      fetch('http://localhost:3001/payments')
        .then(function (resp) { return resp.json() })
        .then(function (data) {
          self.props.dispatch({
            type: 'UPDATE_TOTAL_DONATE',
            amount: summaryDonations(data.map((item) => (item.amount))),
          });
        })
    }


    handlePay = (id, currency) => {
      const { amount } = this.state;
      const self = this;
      return function () {
        fetch('http://localhost:3001/payments', {
          method: 'POST',
          body: `{ "charitiesId": ${id}, "amount": ${amount}, "currency": "${currency}" }`,
        })
          .then(function (resp) { return resp.json(); })
          .then(function () {
            self.props.dispatch({
              type: 'UPDATE_TOTAL_DONATE',
              amount,
            });
            self.props.dispatch({
              type: 'UPDATE_MESSAGE',
              message: `Thanks for donate ${amount}!`,
            });

            setTimeout(function () {
              self.props.dispatch({
                type: 'UPDATE_MESSAGE',
                message: '',
              });
            }, 2000);
          });
      }
    }

    handleSelectPayment = (amount) => {
      const { selectedAmount, selectedPaymentID } = this.state;
      selectedAmount[selectedPaymentID] = amount;
      this.setState({
        selectedAmount,
      })
    }

    handleTogglenPayment = (id) => {
      this.setState({
        selectedPaymentID: id,
      })
    }

    renderCharities = () => {
      const { charities, selectedPaymentID  } = this.state;
      const listAmount = [10, 20, 50, 100, 500];
      return charities.map(item => {
        return (
          <Card
            key={item.id}
            {...item}
            openPayment={this.handleTogglenPayment}
          >
            <Payment
              itemID={item.id}
              handleClose={this.handleTogglenPayment}
              handleSelectPayment={this.handleSelectPayment}
              isOpen={selectedPaymentID === item.id}
              handlePay={this.handlePay}
              currency={item.currency}
              listAmount={listAmount}
            />
          </Card>
        )
      });
    }

    render() {
      const donate = this.props.donate;
      const message = this.props.message;

      return (
        <React.Fragment >
          <Header donate={donate} />
          <Main>
            <Container>
              <Text>{message}</Text>
              <Row>
                {this.renderCharities()}
              </Row>
            </Container>
          </Main>

        </React.Fragment>
      );
    }
  }
);

