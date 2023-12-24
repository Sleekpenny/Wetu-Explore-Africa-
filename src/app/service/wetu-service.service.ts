import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WetuServiceService {

  constructor(private  fireservice: AngularFirestore, private firestorage: AngularFireStorage) { }



  uploadImg(selectedImg, formData){
    const FilePath = `postImg/${Date.now()}`;

    this.firestorage.upload(FilePath, selectedImg).then (()=>{
      this.firestorage.ref(FilePath).getDownloadURL().subscribe (downloadURL =>{
        formData.image = downloadURL  
       
          this.fireservice.collection('post').add(formData).then((data)=>{     
          }).catch((error)=>{})       

      })
    })
  }

  loadPost(){
    return this.fireservice.collection('post').snapshotChanges().pipe(
      map((data) =>{
       return  data.map(a=>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id
          return { id, data}
        })
      })
    )
  }

  
  loadSinglePost(id){
    return this.fireservice.collection('post').doc(id).valueChanges()      
  }
  
}
