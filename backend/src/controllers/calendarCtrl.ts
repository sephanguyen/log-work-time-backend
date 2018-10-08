import {Controller, Get, ResponseView, Post, Authenticated, Required, BodyParams} from "@tsed/common";
import * as Express from "express";

export interface Calendar{
    id: string;
    name: string;
}

@Controller("/calendars")
export class CalendarCtrl {

    /**
     * Example of classic call. Use `@Get` for routing a request to your method.
     * In this case, this route "/calendars/:id" are mounted on the "rest/" path.
     *
     * By default, the response is sent with status 200 and is serialized in JSON.
     *
     * @param request
     * @param response
     * @returns {{id: any, name: string}}
     */
    @Get("/:id")
    async get(request: Express.Request, response: Express.Response): Promise<Calendar> {
        return {id: request.params.id, name: "test"};
    }

    @Get("/")
    @ResponseView("calendars/index") // Render "calendars/index" file using Express.Response.render internal
    async renderCalendars(request: Express.Request, response: Express.Response): Promise<Array<Calendar>> {

        return [{id: '1', name: "test"}];
    }
    
}