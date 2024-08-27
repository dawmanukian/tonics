import { createStore } from "redux";

const store = createStore(
  (state, action) => {
    if (action.type === "add-data") {
      return {
        ...state,
        currentUser: {
          balance: action.payload.balance,
          level: action.payload.level,
          channel1: action.payload.channel1,
          channel2: action.payload.channel2,
          channel3: action.payload.channel3,
          channel4: action.payload.channel4,
          channel5: action.payload.channel5,
          channel6: action.payload.channel6,
          refCode: action.payload.refCode,
        },
      };
    }
    if (action.type === "channel1") {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          balance: action.payload.balance,
          channel1: action.payload.data,
        },
      };
    }
    if (action.type === "channel2") {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          balance: action.payload.balance,
          channel2: action.payload.data,
        },
      };
    }
    if (action.type === "channel3") {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          balance: action.payload.balance,
          channel3: action.payload.data,
        },
      };
    }
    if (action.type === "channel4") {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          balance: action.payload.balance,
          channel4: action.payload.data,
        },
      };
    }
    if (action.type === "channel5") {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          balance: action.payload.balance,
          channel5: action.payload.data,
        },
      };
    }
    if (action.type === "channel6") {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          balance: action.payload.balance,
          channel6: action.payload.data,
        },
      };
    }
    if (action.type === "edit-balance") {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          balance: action.payload.balance,
        },
      };
    }
    if (action.type === "edit-level") {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          level: action.payload.level,
        },
      };
    }
    return state;
  },
  {
    currentUser: {
      balance: 0,
      level: 1,
      channel1: false,
      channel2: false,
      channel3: false,
      channel4: false,
      channel5: false,
      channel6: false,
      refCode: null,
    },
  }
);
export default store;
