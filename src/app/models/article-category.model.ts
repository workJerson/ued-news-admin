export class ArticleCategory {
  name: string
  description: string
}

export class CreateArticleCategoryModel extends ArticleCategory {

}

export class GetArticleCategoryModel extends CreateArticleCategoryModel {
  id: number
  status: number
  created_at: Date
  updated_at: Date
}

export class UpdateArticleCategoryModel extends GetArticleCategoryModel {

}

