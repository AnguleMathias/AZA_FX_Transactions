const app = require("../index.js");
const supertest = require("supertest");
const requestWithSupertest = supertest(app);

describe("FX Transaction Endpoints", () => {
  // get all transactions
  it("GET /transactions should show all transactions", async () => {
    const response = await requestWithSupertest.get("/transactions");
    expect(response.status).toBe(200);
    expect(response.type).toEqual(expect.stringContaining("json"));
    expect(response.body[0]).toHaveProperty("id");
  });

  it("GET /transactions/:id should show a transaction by id", async () => {
    const response = await requestWithSupertest.get("/transactions/3");
    expect(response.statusCode).toEqual(200);
    expect(response.type).toEqual(expect.stringContaining("json"));
    expect(response.body[0]).toHaveProperty("id");
  });

  // get transaction by id
  it("GET /transactions/:id should return 404 if transaction not found", async () => {
    const response = await requestWithSupertest.get("/transactions/99");
    expect(response.status).toBe(404);
    expect(response.type).toEqual(expect.stringContaining("json"));
    expect(response.body).toHaveProperty("message");
  });

  it("POST /transactions should create a new transaction", async () => {
    const response = await requestWithSupertest.post("/transactions").send({
      customer_id: "1",
      customer_name: "John Doe",
      input_currency: "USD",
      input_amount: 101.11,
      output_currency: "KES",
      output_amount: 10001.11,
    });
    expect(response.status).toBe(200);
    expect(response.body.status).toBe(true);
    expect(response.type).toEqual(expect.stringContaining("json"));
    expect(response.body).toHaveProperty("transactionId");
  });

  // create new transaction
  it("POST /transactions should return 400 if request body is empty", async () => {
    const response = await requestWithSupertest.post("/transactions").send({});
    expect(response.type).toEqual(expect.stringContaining("json"));
    expect(response.body).toHaveProperty("sqlMessage");
  });

  it("POST /transactions should return 400 if request body is incomplete", async () => {
    const response = await requestWithSupertest.post("/transactions").send({
      customer_id: "1",
      customer_name: "John Doe",
      input_currency: "USD",
      input_amount: 101.11,
    });
    expect(response.type).toEqual(expect.stringContaining("json"));
    expect(response.body).toHaveProperty("sqlMessage");
  });
});
