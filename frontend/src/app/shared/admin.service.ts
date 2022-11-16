import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  adminLogin(data:any){
console.log("in service compt",data);
return this.http.post("http://localhost:3000/admin/login",data)
  }
  GetPostAndCategory(){
return this.http.get("http://localhost:3000/admin/landing")
  }
  createCategory(data:any){
return this.http.post("http://localhost:3000/admin/addCategory",data)
  }
  viewCategory(){
    return this.http.get("http://localhost:3000/admin/viewCategories")
  }
  createPost(data:any,categoryTitle:any){
    return this.http.post("http://localhost:3000/admin/addPost/"+categoryTitle,data)
      }
  deletePost(id:any){
    return this.http.delete("http://localhost:3000/admin/deletePost/"+id)
  }
  viewPosts(categoryTitle:any){
    return this.http.get("http://localhost:3000/admin/viewPostsInCategory/"+categoryTitle)
  }
  deleteCategory(categoryName:any){
    return this.http.delete("http://localhost:3000/admin/deleteCategory/"+categoryName)
  }
  // updateCategory(categoryTitle:any){
  //   return this.http.put<any>("http://localhost:3000/admin/UpdateCategory/"+categoryTitle)
  // }
}
