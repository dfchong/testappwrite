import { Client, Account } from "undici-types";
const client = new Client();

client
    .setEndpoint('http://localhost:83/v1')
    .setProject('677992230011ce42787d');