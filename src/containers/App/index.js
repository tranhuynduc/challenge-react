import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateMessage, updateTotalDonate, fetchPayments, addPayments, fetchCharities } from './actions';
import { Container, Main, Row } from '../../components/Layout';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Payment from '../../components/Payment';
import { Text } from '../../components/Typography';
import configs from '../../configs';
import Message from '../../components/Message';

class App extends Component {
  constructor() {
    super();

    this.state = {
      listAmount: configs.LIST_AMOUNT,
      charities: [],
      amount: configs.DEFAULT_DONATE,
      selectedAmount: {},
    };

    this.msgTimeout = null;
  }

  componentDidMount() {
    this.props.fetchPayments();
    this.props.fetchCharities()
      .then((data) => {
        this.setState({ charities: data });
      });
  }

  handlePay = (id, currency) => {
    const { selectedAmount } = this.state;
    const amount = selectedAmount[id] ? selectedAmount[id] : configs.DEFAULT_DONATE;

    this.props.addPayments(id, currency, amount)
      .then(() => {
        this.props.updateTotalDonate(amount);
        this.props.updateMessage(`Thanks for donate ${amount} ${currency}!`);

        if (this.msgTimeout) {
          clearTimeout(this.msgTimeout);
        }

        this.msgTimeout = setTimeout(() => {
          this.props.updateMessage('');
        }, 2000);
      });


    this.setState({
      selectedPaymentID: null,
    })
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
    const { charities, selectedPaymentID } = this.state;
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
    const { donate, message } = this.props;

    return (
      <React.Fragment >
        <Header donate={donate} />
        <Main>
          <Container>
            <Message message={message} />
            <Row>
              {this.renderCharities()}
            </Row>
          </Container>
        </Main>

      </React.Fragment>
    );
  }
}

const mapStateToProps = state => state

const mapDispatchToProps = (dispatch) => {
  return {
    updateMessage: message => dispatch(updateMessage(message)),
    updateTotalDonate: amount => dispatch(updateTotalDonate(amount)),
    addPayments: (id, currency, amount) => dispatch(addPayments(id, currency, amount)),
    fetchPayments: () => dispatch(fetchPayments()),
    fetchCharities: () => dispatch(fetchCharities()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
