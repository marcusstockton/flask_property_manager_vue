import { authHeader } from "../helpers/auth-header";

export const PortfolioService = {
  getPortfolios
  // getPortfolio,
  // createPortfolio,
  // updatePortfolio
};

const BASEURL = "http://localhost:8089";

function getPortfolios() {
  const requestOptions = {
    method: "GET",
    headers: authHeader()
  };

  return fetch(`${BASEURL}/portfolio/`, requestOptions).then(response => {
    return response.json();
  });
}

// function getPortfolio(portfolioId) {
//   const requestOptions = {
//     method: "GET",
//     headers: authHeader()
//   };
// }

// function createPortfolio(portfolio) {
//   const requestOptions = {
//     method: "POST",
//     headers: authHeader()
//   };
// }

// function updatePortfolio(portfolio) {
//   const requestOptions = {
//     method: "PUT",
//     headers: authHeader()
//   };
// }
