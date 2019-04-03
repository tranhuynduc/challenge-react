import { UPDATE_MESSAGE, UPDATE_TOTAL_DONATE } from './constants';
import { summaryDonations } from '../../utils/helpers';
import configs from '../../configs';

export function updateMessage(message) {
  return {
    type: UPDATE_MESSAGE,
    message,
  }
}

export function updateTotalDonate(amount) {
  return {
    type: UPDATE_TOTAL_DONATE,
    amount,
  }
}

export function fetchCharities() {
  return () => {
    return fetch(`${configs.BASE_API}/charities`)
      .then((resp) => { return resp.json(); })
  }
}
export function fetchPayments() {
  return (dispatch) => {
    return fetch(`${configs.BASE_API}/payments`)
      .then((resp) => { return resp.json() })
      .then((data) => {
        const amount = summaryDonations(data.map((item) => (item.amount)));
        dispatch(updateTotalDonate(amount));
      })
  }
}

export function addPayments(id, currency, amount) {
  return () => {
    return fetch(`${configs.BASE_API}/payments`, {
      method: 'POST',
      body: JSON.stringify({
        charitiesId: id,
        amount,
        currency,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((resp) => {
      return resp.json();
    })

  }
}
