//post_id,post_text varchar (140),createdBy int,date_created timestamp,post_photo bytea,liked int,disliked int 

import { Timestamp } from "rxjs"

export interface Post {
    id : number
    text : string
    userId : number
    createdAt : any
    postPhoto : any
}