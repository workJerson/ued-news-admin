export class Article {
  header: string
  video_path: string
  thumbnail_path: string
  body: string
  article_category_id: string
}

export class CreateArticleModel extends Article {

}

export class GetArticleModel extends CreateArticleModel {
  user: object
  article_category: object
}

export class UpdateArticleModel extends CreateArticleModel {
  status: number
}
