import { GetArticleCategoryModel } from "./article-category.model"
import { GetTagsModel } from "./tags.model"
import { GetUserModel } from "./user.model"

export class Article {
  header: string
  video_path: string
  thumbnail_path: string
  body: string
  article_category_id: string
}

export class CreateArticleModel extends Article {
  tag_ids: []
}

export class GetArticleModel extends Article {
  user: GetUserModel
  article_category: GetArticleCategoryModel
  tags: GetTagsModel[]
}

export class UpdateArticleModel extends CreateArticleModel {
  status: number
}
