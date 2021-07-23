import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute(): User[] {
    const listUsers = this.usersRepository.list()

    return listUsers
  }
}

export { ListAllUsersUseCase };
