export const settransactions = transactions => {
  return {
    type: 'SET_TRANSACTIONS',
    payload: {
      transactions
    }
  }
};




export const setAccounts = accounts => {

  return {
    type: 'SET_ACCOUNTS',
    payload: {
      accounts
    }
  }
};
export const addAccount = (name, balance) => {
  return {
    type: 'ADD_ACCOUNT',
    payload: {
      name, balance

    }
  }
};

export const removeAcct = (accountID) => {
  return {
    type: 'REMOVE_ACCOUNT',
    payload: accountID
  }
};

export const widhraw = (accountid, balance) => {
  return {
    type: 'WITHDRAW_MONEY',
    payload: {
      accountid, balance

    }

  };
};
export const addMoney = (_id, amount) => {
  return {
    type: 'ADD_MONEY',
    payload: {
      _id, amount

    }


  };
};


