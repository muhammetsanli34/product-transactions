import Vue from "vue";

export const setTradeResult = ({state, commit},tradeResult) => {
        commit("updateTradeResult",tradeResult);
        let tradeData={
            purchase:state.purchase,
            sale:state.sale,
        } 
        Vue.http.put("https://urun-islemleri-29797-default-rtdb.firebaseio.com/trade-result.json", tradeData).
        then(response => { 
             console.log(response + "fadsfsdf");
        });
}

export const getTradeResult = ({commit}) => {
    Vue.http.get("https://urun-islemleri-29797-default-rtdb.firebaseio.com/trade-result.json").then(response => {
        // console.log(response);
        commit("updateTradeResult",response.body);
    })
}
// import Vue from "vue";

// export const setTradeResult = ({state, commit}, tradeResult) => {
//   commit("updateTradeResult", tradeResult);
//   let tradeData = {
//     purchase: state.purchase,
//     sale: state.sale
//   }
//   Vue.http.put("https://urun-islemleri-29797-default-rtdb.firebaseio.com/trade-result.json", tradeData)
//     .then(response => {
//     })
// }
// export const getTradeResult = ({commit}) => {

//   Vue.http.get("https://urun-islemleri-29797-default-rtdb.firebaseio.com/trade-result.json")
//     .then(response => {
//       console.log(response);
//       commit("updateTradeResult", response.body)
//     })
// }
