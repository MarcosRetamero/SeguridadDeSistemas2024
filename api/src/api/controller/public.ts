import { Request, Response, NextFunction } from "express";
import { healthCheck } from "@application/health-check";
import { getCryptographicSecret } from "@application/secret-get";

const HealthCheck = async (request: Request, response: Response) => {
    const dto = healthCheck();
    response.send(dto);
}

const GetCriptographicSecret = async (request: Request, response: Response) => {
    const result = await getCryptographicSecret(); 
    response.send(result);
}

export {
    HealthCheck,
    GetCriptographicSecret
}