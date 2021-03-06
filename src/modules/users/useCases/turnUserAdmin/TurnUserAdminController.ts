import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params

    this.turnUserAdminUseCase.execute({ user_id: String(user_id) })

    return response.status(200).send(this.turnUserAdminUseCase)
  }
}

export { TurnUserAdminController };
