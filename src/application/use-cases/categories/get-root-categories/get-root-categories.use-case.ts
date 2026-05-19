import type { IGetRootCategoriesRepository } from './get-root-categories.repository.interface';
import {
  toGetRootCategoriesResponseDto,
  type GetRootCategoriesResponseDto
} from './get-root-categories.response.dto';

export class GetRootCategoriesUseCase {
  constructor(private readonly repository: IGetRootCategoriesRepository) {}

  async execute(): Promise<GetRootCategoriesResponseDto[]> {
    const categories = await this.repository.findAll();
    return categories.map(toGetRootCategoriesResponseDto);
  }
}
