import { config } from "dotenv";
config();

const { PORT, NODE_ENV } = process.env;

export const Config = {
    PORT,
    NODE_ENV,
};

//Here we can freeze the object so it will act as a read-only file. and also we can check all envs are present or not before exporting the Config Object.
