import { authHeader } from "../helpers/auth-header";

export const PortfolioService = {
  getPortfolios,
  // getPortfolio,
  createPortfolio
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

function createPortfolio(portfolioName) {
  const requestOptions = {
    method: "POST",
    headers: authHeader(),
    body: JSON.stringify({ name: portfolioName })
  };
  return fetch(`${BASEURL}/portfolio/`, requestOptions).then(response => {
    return response;
  });
}

// function updatePortfolio(portfolio) {
//   const requestOptions = {
//     method: "PUT",
//     headers: authHeader()
//   };
// }
