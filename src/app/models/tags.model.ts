export class Tags {
  name: string
}

export class CreateTagsModel extends Tags{
}

export class GetTagsModel extends CreateTagsModel {
  id: number
  slug: string
  status: number
  created_at: Date
  updated_at: Date
}

export class UpdateTagsModel extends GetTagsModel{

}
