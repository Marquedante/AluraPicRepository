import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; //biblioteca para requisicao assincrona
import { PhotoService } from './photos/photo/photo.service';
import { Photo } from './photos/photo/photo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { // implements OnInit {
  
  //title = 'Primeiro Componente em Angular'; //title eh uma propriedade do componente
  
  //photos: Object[] = [];
  
  //constructor(photoService: PhotoService) { 
    //  photoService.listFromUser('flavio')
    //              .subscribe(phts => this.photos = phts);
//}

//photos: Photo[] = [];

//constructor(private photoService: PhotoService) { 
  
//}

//ngOnInit(): void {//metodo que faz parte do ciclo de vida de um componente em angular
                  //executado apos o componente ser criado e depois de todas as dependencias
                  //serem satisfeitas
  
//  this.photoService.listFromUser('flavio')
//                   .subscribe(phts => { //bloco criado no arrow function
//                      console.log(phts[0].description);
//                      this.photos = phts
//                    }
// );
//}

//injetando o HttpClient
//constructor(http: HttpClient){
  // console.log(http);
  //  console.log(">>>>>" + http);//verificando se o HttpClient realmente foi injetado. Veja o console do browser.
  //}

  //injetando o HttpClient
//constructor(http: HttpClient){
//  http.get<Object[]>("http://localhost:3000/flavio/photos")//requisicao do tipo get para o endereco passado
//      .subscribe(phts => this.photos = phts)
//}

//injetando o HttpClient
//constructor(http: HttpClient){
//  http.get<Object[]>("http://localhost:3000/flavio/photos")//requisicao do tipo get para o endereco passado
//      .subscribe(phts => { //abrindo um bloco com {}
//        console.log(phts);
//        this.photos = phts})
//}

//injetando o HttpClient
//constructor(http: HttpClient){
//  http.get<Object[]>("http://localhost:3000/flavio/photos")//requisicao do tipo get para o endereco passado
//      .subscribe(phts => this.photos = phts, //1 - callback de sucesso
//                 err => console.log(err.message) //2 - callback de erro  | "http://localhost:3000/flavio/photosXPTO"
//                 )//podemos passar tres callbacks sao elas: 1 callback de sucesso -
//                 //2 callback de erro - 3 callback para quando o Observable terminar
//}

// photos = [];
//  photos = [
//  { url:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhAQEBMQFRUVEBAQEBcVFRAPDxUQFRUWFhUVFRUYHSggGBonHRUWITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGy0dHx0tLSsrLS0tLSstKy0rKy0tKy0rLS0tLS0rKy0tLS0tLS0rLS0tLSstLS0tLS0tLS0tLf/AABEIALEBHAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAACBQEGB//EAEEQAAEDAgQDBAgEBAUDBQAAAAEAAhEDIQQSMUEFUWEGE3GBIjJCkaGxwfAUUnLhBxWC0TNiksLxI7LSFiRzk6L/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAlEQACAgIBBAIDAQEAAAAAAAAAAQIRAxIhBBMxQSJRMmFxFFL/2gAMAwEAAhEDEQA/ANptFFbRTjaKIKa9FnChRtJFbSTLaaIKSAUFJWFNNikrikgFBTXe7TYpqwpoUS7tdFJOd2u92pYFO7U7tOd2pkSwJ90u92m8i7kSwKd2p3abyLmRAK5FMiZyLuRAK5FMia7tQ00ApkXMibyLhalihMsVHMTrmKmVRTi/ZXB/QkWKppp/ulU0loyIGmhuprQNJUNJAZzqaoaa0TSQ3UlSGe6mhuprRdSQ3UkBmupoTqa0nUkN1JAZjqaEaa1HUkM0kB6VrFcU1ZoRGhYNlGsVwxXAVgEBQNVsquAugICgarZVcBdhAUyrmVFhSEALKplRIXYQA8qmVEhSEAPKpkRIXYQAsimRFhLY6tkaY1+SzOairZqEHOVIlaq1oJOySOLkkbAx0mL33QmQ4NB8z/nvKyuJ8apUs1xadNdV83L1UpeOD6mLpIR88s7i+09NtfuTplMumAHQIB5+XRN4fGufGW3uk/2C+aYvFio6o5xIPeuOgc4NkxAO+i9b2VxLnABzSBABLyMs2gSBc+S4SlL2z0RhH0j1VGoRpJv6RPq+82Wi1oIk385SjGR6xzcgAPhmPyAXW12D848cxA8OSQbTOeRJoLA2uulilFwdojZV9nG/ij48/wAhYsVSxMlqqWrZgVLEM002WqhagFDTQ3U04WqjmqkEnU0N1NOuahuYgEXU0M0085iGWIDUaiNQmorVClwrhUCuFClgrKoXUBYLqrK6gOqLiiA6oksVxOnT1dJ5C6y3drKQkZKltYyn6rlLPjTps7R6fJJWkeiUWCztZhyQCXiebf7Jqlx+g7Rzv9LkWbG/aH+fL/yzUUQKOMpvs1wJ5aH3FHhdE0/BzcXHhklY5xYLHuO7iTya0gQT0tEovFeK06XouJEy0kCQLX+YXgcdjnNccj7f5ZNoi2y8PV5L+KPodHi4cmanEuMFpIaJ8LgjxG/3vbz7qDXEuqcwb2N9kY0ASJuCBA063QqwJcydM2Y+Gy8XhH0UiUuHMdVfUMDwFyG2hbPDAMzC5xaMwAE2AJ18f2WLT4m2iA7ES0OeabMoe6bTIgETHNb/AAWnDgHZT6Wf0jDSJt9VNXwxvHlI3+0NE4RtLKXVGvkGYJB1EdIWdg+JioBlcYBg7gHkW7J3tliBVAymMjfIgxcdF4rgld9SvVNNsNblZofShoLiDuRMea7KClOonknLXHcvLPpGAYYkxdOpThZOQBwI+oTZX1YqlR8mTtnCqlWVStGShVSFcqpQgMqpVyqFUA3BDIRXIbkAJwQyEVyGVQOtcERrgsllZGbWXPY66L7NMFXBWc2sitqpsNB4FdlJiqriom47Y2F1Kh67nKbDtjK83x7jUEsYTAsSNzyHRP8AF8b3VMnc+iPqV4try8ydBeF4urz6rVHu6Ppre8gfGscaQZNw6feAsbE4+7RTBJIObf3q/Haoq1GsZJyaeJTvCeHhhBIvG/NfPXi2fR5bpE4XhalT/EBbpJm8cvvmvQNw7GjQzzJQTVLASIG55nokTi3uOabDRLRqjVBaIm58YjlJS3E+OVGthr3QOp2SVWoS1zp+ysqu8nXqOg6qqbXgjgn5GKGNdVdJkybybo1Wo3MWwBGu9h1WVQLmjMLcjHuWY6u67pMyZ0+C0pWKo9JhMcJcXRYEtHRZlB7nvdBJ0gnx0CzqWKN+ZgDl4rQ4RVyEk3aNfNZ8stnqsA2HBoiDJvBvGviu1nRVbuIEx5pHE1XZmdy4Zy8ROl7/ACW7Q4XVcYIgEE57QJ5TtKjvwS15C1MS2tQLWtALM2b82V2hB35IfYrDty1gdW4lzmHcBzGH3a+9N0+G5QW0znzNLZt6J2Nuqz+A4Gth8XimPByOp0XNdoHPGYE66xHuXr6V/Pk8XWJdvg9gHtGihqhIlyqXL6dnyqHu9C4aoSBeqF6WSjQNQKpqBZ+dcL02FD5qBUNQJBzlQuKbDUeNQKjqgSJJ5obnFNhqOuqBDNUJFzihEpsNQ7SjNKGwIzQsGqLNKIHKrQiNCAsCrhyqArBAWDyrCoVSFYMQts892jxJc/Ls0Rrubn6LPwvosc9w0BcPl7lfHPJrVxf1y3UjSyvxGhFENg/CV8bO7mz72BVjSMXhWCAmo8ekSST8gna2I1InomXNAYGxsBoknUwSTvoNNVzZ0SJWrOgAbx5lUNTLJI/46eaoaZzeAk8kQtMizjJkNj0c15vFoEIlZW6E8Q8ubsAZsk8Q8t9Eb3MrSxeHESReeRdafvVZ5aHuBcCLR1REYRrz3QEXNlg4qkQ6w+vWFq1HxmH5d0piXh22hLuQVjwyS5QthhGYO1kN2kdPFbfD6B+Y8pXnsMDmcHEzJmbQR467L1XDDAOaRIAHvt9F01MJmHxPFVMJVAfOW7qbvy35dF7rhHaX8Rg63duIfkkQQ4tIEuAHx8CvH9paHfU3N9tnpjk4RBA+9kl/D0F9R9Jou4FwNh6o2m28ea9EIqXPs8mWTi2vR7rsfxR2HrUqFQVnOe2XmxaW5QQ9xJs7Xx1Wh2brvq1MVWdmyOeBRzl2csHtFp9WTmgcgvOOxeIFWm1uCrNDRDrtDS6IkPd7K9rwTCup0/8AqEZ3EvqRdocdh0AgDwXoxx+VnjnK1Q05UKZMITmhemziChUcFdyqVQCcqOBTGVVclgCFwuXaj0FRkZZzlRxXCqmVAVcqFXLCqmmVLLTGGorSvLN46TsVY8VcVN0XRnqw4c1cPC8QeLP5perx6oNCpsNT6B3g5hdFdvML5hW45WOhTvDsTUN3PKOdIKLZ9FFdvNXFVvMLxAxZ/MV3+YkauKx3v0a7Z3iTv+riSCRDnnSdd+S1OJ+pTA/IPkvN4yuC7O4iC2L3JcbWG5stVmNa6k292ANde8wvm5F8r/Z9nFL4r+FmuO8aCBvHNR2FEHodJHxKEx8idN9tdirUnmCDf99ysNWdUVFAQZ8SRMQnMKS1oaLnbXRcZVsb6WkXE7/fRB70CCJJcTMkkBoEk9P3WdS2J8Rmb+ccvsLNoM9MfVehxtKWg8rk6/ZWDhmzUvOp8FmisRxxh7gbiI80lSp+/wC4T2LMOm4001t4+SoxkkOy3zGeq2vBh+QVXAgkEQDIJMCTaNVqVGZQ2dhYjx5KrqXLUAR1QcTjA1uV1iZ8d7fJdYWYlSM7i2Ic1l8pNyDmg/uqfw9xAbjWHQBtSeVxcrD4iTVcSAYBdGunMre/h9wzvqlXUAU7nQ3It8CvXD4nz8r2PqlTi9IakIB7QUhYOCx6nZZv5j71P/SdPn8V37yPN2mbbeOUj7QRBxWmfaCwD2YaNCmcFwGmx7S4yN+SnfQ7bNf8fT5q7cczmlOLcPonKWxI1iwSuF4fTOp+Kj6gds1vxbDoQuSHaFIjAUwdUWkGN9pT/QXtDjcOidwEqcS0bqfjm81Hms0saDupAKj8oSVfGN5pV2MHNZ7qLqaRrAJd+JEpB+KHNIVMYZTuIMIzANXfwARWSitJXmuX2aoV/lTSrN4MxOtRGgpvL7GqM8cCp8kxT4OwJ5qI0qbS+xQmzhLArnhNM7JxpVgUtlo8xxvCtpPpwIBaQDredB1uFh1avcPLjOR1nHboY6Fey7Q4U1KLss5mS9sam1x7l46qWvbBEbCTEgeCyevG7j/DRZXAETYD4BH78CHaTf3C30XlTijSc6k6ToWHmz7HwTzOI+iGnTLY7z9/NZcaOsciZruxN4boB9bT980M44OFtBI9xA+SyzjR6QnUuFtoHNLivAiwt8Op5pRdj1+FxLXUiCdviJhZbHyGO00kaWNlk/jO7AdPo5hm81fh+J7yGXIMgEdCYPwPvRRG/oZrAO2u0kN5kkzorYfCuaSXgDWLztEeP9lMhYTIdcC+l7e8qnEKjick5Q1ol0HNBBsNp6+SqiHKgeMkv9AmA0SN8xm3uXn8ZiDVeKTvzAnYnS3wT2LGIpkuIGWDB0vAm/PWyWwNNlR3el5mYaBsANBz0+K7Kkeecm3QziOJCmzumtB1GgmNF6n+HWAIoPqu9ao/w9Fv7yvC0cHVrVW02tJzPIa4A6aElfYOH4RtGmymz1WtDQj4VHKbbYfuOq6aPVWhcK5mKK931VTT6q6haVKAF1AFCNABNFqjKcoKEnUFX8MnXshWcyLqWXUzThSVBgpWiHSh1zayF1RnHCiYU/CAq3ex4rgq2ICo1QpUwY5oX4YK+IrQUs7Eu5KkaQVldGbXSdOEVqrZixxldFFZJtKM16zZbG2V0UV0mCrNcpYscFdEbVSQKuHlNhY73q8r/L2iu8RYOlvQG4HxW/mKxOMFzKrXj2hHm39llu0d8EvlyA7VcDa6j3rAA+nJt+Xf76LwTcX6Ypz6WWQOfQL6N/Mw5pbUtmaY32O2+1l8k4oz/wBw8cog9ANV3wR2TTM9RLWSaNhuM2MgzdVr4v8Ab78kp+NIyh7Q8RqbO962eB8FbjSWszMi7puAOh68lpwrlmFlYk3EmC06G11p9hP8aowmQGlwGwJgfIrUxHYEmMtYnSxH9lbh3ZirgXOrAh4yEHnJI/t8VhuOrSNwn80bWLpiowtadNP1BeM4zjKtN5punkTAjNEjM3Z1vAj4b9HFmXZQTrab33j6LP4jg31KdXEOcAW+jHM6zJ6OjzTHwzrmlwecq9oKpBplxOg5idxz5omCxgohsieQ99j/APn3IH4LKfSAmY0g+dlpcM4V3rmNFi52WdRzPuF12lSPMpN8nov4e0jUq1K7gGgNFMACBe/0C+j5GhuuxWBwvANoMbSpiw1O5O5K1G4c7ryT+T4NKR0OXSCrtohXL2iypkFTplN5YCXFWLBXubpZUVIBRmwNkIxqud+NENIu8BCqCdFypUVe8Qti5E9FwjmrVHAKpIKCxarTafFBcIB5o1em2ZQqgCAQaHEyVY0065wQiVolGQyqEwyqFmtqhXbXSjjZqtcERsLJ/Eora5UotmoHq7XhZjax6ojKh5FSgajawVxUlZoqHkURr3cipRTRNRI8WomrTytgHMCCdtVyXcioc8G2yUWLpmP/ACeo0ekWOMCxBywAbTsvCccwHdVqhMXjKNSADB8rSvo9DHmq0gG+XKQecGQV8+7QXq1niIzQPGXSB5rtgbs69QlSozWCY9w6lfXuFYVlGmxjAAMrSeZJFyeq+Y9msPmqAuEtaWvd+kOaD8x8V9S7tyud+jzoba5VxT5Y8c2ke9Aaxy66kdzZeY3H8kJfgcrSYiS47XtCRr4duIw1WkJkVHAQT6whw+JTfGMeHDLOUCBI1hE4Q0FpcI9YX0kxr11+C3F1yenqKo832a7MOrDPWcQ0PdTj2iWyDB5C69B2a4dTp16zGmWtpscJ/M4kEjyatEcTZRpubUyy0Oy2gjM4n5LE7MvdWdia2aA57WD+kE/7gq5uV2YlGMYKvJ7doaBaFO+kwsXK4e2uZXfmWbOO36NxzQdCgCkOayvSHtKS47oNl9GtT11TE9VhAu5rhqu/MULsbgYJuUCuWTqsSpXdzKGartyqTc2zVahvq9Vjmo4boZqk7oXc1zHNWcRzWI+t1VTXPVXgbmq8CdVR9Ru5WU6v4papVlCbmvVqsG6WOIGxWVUehFxWqJuEp0xujtptS/dlEpt5qGRpjGo7YCWa3qiNpxuoUaDwiB/IJVsc0ek4c1KKMB5Gyu2t0S831XW+KgD/AIhWFdL5QunKlFD4DAf4jm6OcSBtJ/deB7W4DJJiATm8wbr6v2fwve0z/lfaOouvBfxE4cab9ZZmJN7AldcXEjpN7QX6MTshhocS4S2ox9MeIykj5L3+Df6Im8CD5LznAKVMU6FNpJcadao+xADs7QL+XzXoafVXJycfDDOhQAwh5lfDy5zBa7mjpchcKNA+KdnQMM6oQ0uDSTIsT1+90PBUm06bGNEBrQB7tyvf8TwLatKpTJkFjm2vciJsvCAza3RbcaNzlsBxXDBiSQWts2x9onTy/bqhcMwLaDO7bs5/jOY6/Be04Dw0NEukkb6SZufevNYv0HvadQ53zlZp0XK1SQMNKsUM1lGvnVSjlwWb4q0DmhOA2lULVaIEJ6rk9UPKquShYUEIbmNKGVUuKC0dc0aITw1ckqZuapLK2VMwVXIb1aIXLwhvqAIJVHt6q0LOvegOqKOCCVoWMtqq4d1S1MwdATztyvb70RWPAFzqPs2SzO40x8I7KkpWnUkCBGx31te33KKKkSSB5QTFvcs2Nw5eQiiEBzhAJiZ0sbDXw/ZFFXVsCbWI5mLH3qF3QSZ0KtHVBNWwEbHaPBFFW2xMCYgFRjcI0yulx6Kd8TZoGnIzfT5/BEL5tf4X+4UsbGz2WxTw8Uh6hzPfsdAAPP6LN7f4Jz6VZ72gBpbUAzMzFkibA6aH+nqhisQCRMjS94sQhVwajXAjMD6LpGa3KNwtxklyb7nFUcw7KIoYR7LOdQYCNPZBMDxBRAfFVLIgZRYWgAwJJty1RgOenIwDEE7ePyWZSTMudsGXKzZB3+qt3wafSMkxtz2BjyVmPmDOxM2if+Pks2TY9TWr1e5YxlSmHgNL3udJBMSA1vjC83jmgPOQggwQRMdR70IN1v1Ij1hGhI8UNzwBYkbCw0HNackzTyWjc7P4p7TUNR+dpc3u2zECPSkdCNeRQe0T2Oe0gQ8g5hlIYd5BKy6NQ6tcRECevRGFQmCTJibxpvFk2RXltVQvlVCwpkOcIvfLBsI100QwToSN7aCJ16HRSznsyoaQuFpRCdyRsJ0bz+q46bXi9tyRdBuBgrhaUw1psNQCJ9XS/u1ClQOGkaej8ig3QnlK6WkJtxNrCwtoeaXc8tJJtsOpnxQbAHtOwQ3NKKCD62Y3253/AGVW5Tu7e0C0GOaqLYu9h5ob2kI7rmADAEAxrHPr/dAdVkx0tb58lbJsBeEByaPgYtO28JR5FpPLxWkxZV7UFFjXw+4VWsnYq2SwVX2v6/8AYpS9XzC6osnNmlg9X/e6E/1neP8A4KKKAKPWd+oK9fWn+r6lRRZIGr+r/p/7l2hoP/jYootP8Tp6H27fpHyK7S9ny+RUUWEVDe/v+bVwa/0/3UUQM5W1P6T8ykzt4O+YXVFEGUGnmmm+z4fQKKKsgKtp5/Vcdr/r+SiiiIEOo/pXfaP6W/IKKIUlXRv6XK2I2+9yoooH4Ku9T/6/kEriPZ/UVFE9ECUfa/o+qbxGo/SVFFV5L6BD2fD6BdOp8/m5dUW14MexZnqnxP8AtS7fWP6Soohsu/1HfpP0S2J9U/qd81xRUrFRt4n6oNH1z4BRREZKUPa/UULFesoojKf/2Q==" ,
//  descricao:"Little Horse"},

//  {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDXleNvwVudT5VLzvfLSDzvVqfm--2SMNA5L1b-hToGRAN4KL36g" ,
//  descricao:"Old Computer"},

//  {url:"data:image/jpeg;base64,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" ,
//  descricao:"Farm"},

//  {url:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFRUXFxUVFRcYFRgVFxcVFxUXFhUWGBYYHSggGBolHRYXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQGi0lHyUtLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBFAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAADBAIFAAEGBwj/xAA+EAABBAADBAgDBQgCAgMAAAABAAIDEQQhMQUSQVEGImFxgZGhsRPB8AcyQmLRFCNScpKy4fGCohUzQ0TC/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAJhEAAgIBBAIDAQADAQAAAAAAAAECEQMSITFBE1EEIjJhQnGxFP/aAAwDAQACEQMRAD8A9BESnuozM1otXScIH4ag6JNsCxzEgKqaNV80av3w2kMRAgZTOjSssKt3x0gyRgpDsqJIclW4gLoZ4VWTYbNIaKcoRarOXCpV8dJFCzhkl3FNSMQjGgYElRKm5qnFFaQA2hFjCYEKNFCOSYrNRcqTmHiHJbjgTsUSpIVmQwpuOLsWRxpqNiZNkWQhMMg5LbGphidE2QECiY042lsBOgsRMK0WAcE9IRySMoRQWLS0k5SmZWpOVIYrMk5gmpyVXyOSKASJWVqacl5AkMTcxaRnNWJDPY4iikpLCz81YUCFoYkN9S+IEu9Y0pAFS0hRrQZEhiczLSxYnnBAe1AxWRuSAYwU45qgWIArJYFVzw5q+exKyxApFJlI+G0GaGgrkwoGIw+WSVDsovh5piMUjPwxUWszSGEjYmoY1CNqdgYmhM3HEnIIVkbE7CxUS2ZHAjiJFjYmmQpktibY1MtTrogB2pOVMQJz1AzqL0FwTAk/FFLSYpQlS0hSsaROTEpOXEFRkKHuFIoE82gyRp4RoUjUhiRahSMTpQJQkBXuCxMOjWJDO+ikIVhh8Wk9xa3FZmWpIOYURpkq8SEKTJu1ADzShylCbOovl7UACe5BdKjkgpeaPkkMEZVnxUtK0pd0pCBjr3AoTglBi1gxQ5pBQd7EMrG4gc1YuwDI2/ExD/htqwPxHw4eKmc4wVyZUYt7Iq5mBLfABRpsbG+xBHI4cJHuDW97Ru25SjB/VTCanukOUXHkAGJqFqK1tD/1h57Xlg9Gm0yHxgEyM+EBq4O3gO+6KU8ji/y2NRT7EsbtGOAAyHX7rRqefcO0rmpunEpd+7ZGG8AQXE8s7Hsr3pD0bMo+KwiTIboJ6pAzqwuLnYd7dcxgINEUQRrlp2eq5pfKcuNjph8dd7lzhvtGmYf3kUTxybvMPbmSV6P0Y27DjIjJCTlk9pycxxF0R7HivFXYZjrAG67UHM33q8+z3abMFjHnEythidC4Em91zg9u5VcfvV4rTD8huSTZOf4yUW0j1yRqVmjVTF9oWzXv3RORejnRyNb/AFFuXeVdskZI0Pje17To5rg4HxC7U0+Dgaa5QiYkDEspXRhoaKtxI1TBFS9qDMxNShAcFJaEvhrbmJghaKQxJwQnhPFiVnQMUkQHosjkCRyQAHlYtOKxAz0IuU2vS7nqO+qMx40VEwpZs5RmToAg+EpWQEcVYPclJmpAK/HIUm41AlYlZAgotDiGlAmhacwqx0hWjiUh0TxGGKSliITrcQgyOBSAc2C0RtfiZRbY8o2n8Un6D3IVLi9oOxEhklNtvqtOh7SOXYrLpA6oYYhxaHHvebPoT6KjLKXFjXlySk+Fsjqf0gkuWXEeMBTMU44Ln2uITWHmXbZzUdThnArnOkuNBl3btrKNdvP38k/hJ1U9KZeuD+VtcybPmsPk/g2+MvuT6PdJyyT4clCFxofkJyB7k5042U5rPjRdbdzeP4o+Pi2/JcM4Pc49UDL8RrNd30Y2m6fDbrq+JEQ13G2/gd22LB7ivOmqWpHatmcds+YmywjrGgDwo2e/h5JHpAx8kYEjmlwJp1VxGRIA49iL0iw5w2IpgpjrezuP4fA2PAKs2xjS9jRyOveDmnCL1KS4Npyi4NMpIpd0kHt17NV0PRzpVLhH70TiBY3mXbXj8zfnqudxv/scRz+Waxq717OFro+juifTTC45oZvfDmP/AMbvxH8h492qstoQEL5pilLaLXEcqyIOoIPAq5wXTLHRG24mR1atkd8Vp8H3XhS2jm9nPLB6PZZWUl3Bclsf7SmPpuKj3D/HHZb4sOY8CV2OHmjmYJInte08Wm/A8j2FaKSfBk4uPIs5QKadHSXeEwF5HJOYpyVqTlSGJPQHpl7VAsSGLbqxMfDW0AdfYQn5KG65pRqDh2pkAQ9Ea9Ae2ljXIGOGRCdIoF6G5yBUbe9LPU3OQnFIYtIEtIE3Il5SkMCXIbnrTyl3OQMtNuusxuGm6z+3/SrbtNySb8TD/Cd13/5PkVXTSFpqv9Lh+I6lOD5s6s6uMZINE/gitASf7SOSgJiSu05i6w4VVtnGAuJ1o7orXK79bTWFmd+i574pdvDPInxz9rC5vlPZI6vix3ciEu9qWgAkDPl9G0boltL4WJaH5Nl/cuzyJP3D33Qvk4qvxB7HKtxMZ3d8W0jrA8iDka8lzJJqmdMjt+luFEmHLgLfh3WefwyQ147tHf8AErz589NJK9MOMDnNeRQnjZvtOVh4zFdzl5RjOqSw6tc4H/iSD7JfG3Ti+gy7JS9i4eb7yE6BY+uKWg19U3DkfA/JdbOdAzp3KRae5EfnmiVY+u9AyAcd3M+ic2NtaaB29E8sN+B7HDiEu4ZC1N7BdjSglYNWeibM6fxPoYhhiJy3x1mX28W+veumD2vaHMcHNOYIIIPcQvEntoEFWPRbpE/CvrMxuPXZf/ZvJ3v7bRyezCeFf4nqOISMpTbZWyND2m2uAIPMFLyRrYwFyptC38Nb3EAR3FimSsQBfwbR/iFpsFhzbkqh7FBriECotp93Q+aTewc0FxJW2GjmgDbygOemHsB4peSJIALnqBlWntKE5AzbpUGR6jICl5HEJDMkKWeVMvQ3tKQyWExW6SDm12Th7EdoRpow7qk5/hdwPf2FV71LD4styObTw+YPBcmfBJy8mP8AX/Tpw5Ulonwamw7mGnCvY9x4rGBWmH2s0Cjm3k6j7puDaeGu/gsv+UKY/Ma2nFpjfx+4tUb6ObIfM6/usH3nnTuHMpHpliY/2j4UTQ1sUbW94suJ83k95Ku3dIHO6rAAOHIeC5XprCGmGWrc8vDzzybV+AqkS8mVamqSHj0wlV22UL53EinDyGWRRtmMa/FwQyPDhI+JhHCi8EjxqlXYub7xBHh3KoL3hwe0kOa4Oa7k5hsHzUqFm0pUerfaGQ3EM3csm9g4trzAXk3SSv2qcjT4jj5mz6ldf0m6VMxDopHtILR12jUuzJAPK1wU0pe5zjq5xce8m0YMbTbZM5XFRJxnNNtcQOOp9Qk4XZk9n6JnesV2hdDMkMRDrZ8a9Vtr+qfA+RQ4znZUiaNdqQwrJb1+skZrtB3hI3ThysV3JyMggHln6hJoaYX8JvwVafvFW0b7By1P60q90fWOXC0IGdz9n+2P/rP426I9urme5HiuykiXjWzsQYnslaacx4d5ajxFhe1vpwDhmCAQewiwujG7VHLljTsRcxCe1MyNS7loZizmramQsQM6F2DI1CG7Dq/ZtWN2oCYa6F6z1hpOWbER2hRcxdcNnxnQqDtjNKPIg0s5KuBQJmkLrZuj3IpObYDuaetCpnKlyDJGToujl2G4cLS42O7UZJ2gOcIN5qEzTyV/iNlOGoSLsKRqgZSyUhxtzyPmrLE4S9Ek6Eg6JDNjDh+oo+6TmwlFWbJSFF4dWgPagCnMBWmsIOist48QmoIWuQFi+zxZUuncV4NriM2SNI8WuBVpBhgNFDpjhd7Z8v5dx3k8A+hKJL6scX9keQmY8qUXOIrv96tZIAiMqsr0XMdgKc35JJwzyTT30R3V6mkGXI+J+SoghG3M/XFORt17P1Sl04Hmm2OFu8f7kMaMh4+HzWn3vAH6zUYzmPBGDhvC+we6QEXZ13D3P6JjByV6paZ4BZ2WfW/mtw4kUgOyywriKsZX8yUrLP1vMfXmpxzgtA/m9QUvJqR2/XspXJT4NfP/ACvYuhUxkwMJOrQ6PwY4tb/1AXjYOXda9X+y3Eb+Hlj/AIJAR3PYPm0rbG/sYZvyX8sSUkYraaApOWFbnMVjwsTTo1iBlThduMdqS09unmrTDbVHB481wYscD5JnDPdwruJCw1muk9T2NtSzmQV1GGxzOK8ZwUrhmDR79fJXUGPfxN9xIXPPS3yXGVKqPW2PadCEGVzbreC80btMji4eJ/VaO0uO8f6ipX+x6l6PSd1p4hBkw7TxC88G0fzu/qWSbXdWUjvAq1fsm16O9OFb2JLE4VnILz521nAkgv7TZvzC3/5SerD35881otuyXXo6jFbFYcxkkH7EVDLtifi93qPZZhtuSg9Zzz/yPzKtSfsmkWLtkEJR+Bc3OvBMxbVec99/iLR37YdVAgnnuj69EvNEVFVJgTqETD4Ug6JsY+TlfgB7IgxvPLwVeWIUzUMJB0TO18A92ExAo18J58Gje+S3Bib09lawvc9jmHRzS0006OFH3Va4tE73Z85YgHXL6KJCAATedI+1YDDLJE77zHOae0g0fZLb45LnO/YWxBv67EvNLfn9eyNK72XffZr0JM7f2mRltNiIEZEg5vz8grRlJpKzzqME1l2+SP8AGzJFZg+tL3Por0AjErjLGCG7+R0JLhX9q4T7Rug5wtzxN/d77muAz3QN0Nd3Wa8U2iVkTdHDb+neFMyadhB8v9oNcUQaKTQ1iXE7vd9eygHUoyOztaEljNMQyzE0QtCf5fNAk0UGvRQDbJbXqf2IM+I/FMv8ELx4F4P9wXkrHdUr0D7FceWY6QA0HYd9/wDF8ZHzTjsyMm8WezT7Md2eYVfPgXjgD4hOTY080hPjzzta+RM59LE34V9/dWLb8ebWJ60FM86w7zzB9/ZN9XiAqyKYCrP14Gymf2tnAHvy+ZXE4nQOwu5X7ppjnDUnxVezFjLXP65KximHNvd9BQ8dhuMNeeZWFz/4jryU2ZjgPPJac0DV7RyzA0z4nNJY9+Qo289p7aAPsoNko6nsBGXuoGUHIHI/6J4ZZKLWbxrXsy00zzWvjFQ3HMTxb9eK2cydfRJNiadJBlwzryOii9waOsCLyvVvoFLxf0KHXxk8D6KDcJ+bPu/yq90z/wAJLvA+yYi3qsgg1ZHZmL58Co8LXLBRH4oOblnwB/F80qyTd1OfA5nUfWiXmxTgTYJysUHXfJP/AM7fYyz3QPxeinG4c/RV+HmsDeBBq8/ZMQuvgD3ElNYK7Ey3w8zTyPp/tWmGxA7Ae3/C58M/Ln3lNxPcBe6P6j81qsfpkNHn32kYAsxz5KG7K1jxnldbrgP6RfeuVmjOfcV0/wBoeM+JiQ0GwxjWVd04lzj/AHAeC5drycjYrmiqOmD+qN9G9knGYqKAGg9w3jyYM3HwC+m8Fgo4WRxRjqxt3WjkAAB7Lw77P9rQYOeSWRjnFzQ1rm0dwXb8iRrTfJeg7J6cDE4j4UTHUGF7nP3QQN4NA3QeJPPgoyKT/LMckW2do2UN7NbKR2pgW4nDywu0kZIyzw3sgfDIpN+0b0q8rAINXzANoX7cRq0+ShQydmOmj50nwxjfJG/7zHOY7+Zji0+oUdzj2K56dNrH4g7u7vP3gOxzQb8TZVKL0XQdSdoVnZmVf9D+jTsVLDvAiJ0hY49jQCT6qnxDM/AWvbOheA+Fg4KaPuNkPMOc2zrrqoySajaRMnQrivsvi34XNJ3eq14Oh6m7fmPVc707+zpuHidNAQQzNzRZtuWd9mq9IdtE6E3XPsUnYgSNIcAWnI8cjwNrlWWS7IUn2fNrF0nQTH/A2hC4mg5xiPc8Fo/7bqR25sz4OKli0Aed3+V1lo8jXgq7e613RuwRwzsFdtpo1rY+iJpM9Qkp3ql2Ptgz4dkhzJaN7h1gadXiCjvxgWDm7I0hXTUdCsVTiNpU40VirVJ7hSKFmD/OPruVrh8MwDMsHeHKkGPLT1pPLh4cSuiwe0WuY1xbV6gADQ15LTVfBWlkGwtviezdNeqM3DitHDur5DJMN2gzgDlypSdtFvIny+aLYqFhBQBMT6zu3AmuGW8Bz4qcYaBYaQ7lnf6IseLaL+93XujyChFid/7ravQk2PDmhy9jUTbW52QL04k/XattwkYN6HMXmNavPXNQewHV5B41R9+KNFhoyLLnmtcw32CWoWkXxIppAPP8QAHlSq9m7NxMjfiMfD8LMnelBJFE/caTuggGia4c1cfAgAPUs8d4k2hbrNGhrRllw1vTxUNW7KVIDhJWmG8PJFrTnk5jQ2A4d/WJrI8knh2vgJc4fE+/vU4PLn57hBuiLNdgCfm3QwhoaS455VlXbqkpsLvgbrA0ZghxHDIUBeufcp3b/hXA3gMeZus9rWO1DSbIB0HK6pTixFuNAHTLTTRVbsH1mkjMfwkjPyz4ouJhut22EAaZ2d2iTnx18U7l0RRby4pjTe4dNSUu7GNb+BwHPXv48FWzSOdld8Mz3c+GSWdE9rXfvTbtdA2yeA1Jy1BTjd7jOhg2jvC48wMruvc9iI7azg02M86zBzo0SG3kuYgLzqRfAhrQQOzl/hNtc8GwezTICqNZfNW20thaSgxGz3PkLg7eJJNnU8yR3qv/AGOS7IysAHgeFgldUYnEbrT2E/iqhkDnXHPtQJdk2PvPHj+gGqlNlWV+x9kOlkMTsQyI6Akb1uv7tAjNdT0c2EMLixKcXE+g6OQBhBINdXMndIO6fBc9/wCLp1h2667DqN3YN2HXfiiMwRBvetxzc6jZdetgo+y4oHuetQmGSMdcOsZ0/dNDj1SCOCg8R4djniUgNFuDnOlBFZaklp5UeOhXmcMLmj7zqo8BWfM6+qI6R26WF5IdqCAeWnEDIaFXrI0M5nb8z8TM+d+Re7IDQNFNaPAAKEGzCT2V7UF0BwjOOehHDMDuRxEapoNaG8qrgDX1kspyl0aHJYjZjrJq7ul6NsPbzI8LCHvIc1gY5vG2DdBNc6BVBJggcqkAFVZHlkM0OXZ8Zzo5cnfIojOQOCZ0kXSeIvdYeG/hNA3lWabwm3ozHvh/EgA65cAAuQiwjRpfcTl+hRWQkWAXNHIEtvvrVKcNa3J0pMR6TsEmKL2500AnmRvG/Zce9hHCuC9Adhb4eIP6pHEbKbf3Q49v6hax2Aj0Z2wyLDblW5rnE2eZsEditGbVD2FwHW78vBc2cG5t3F1SM6AcO+tfRGDy3TTlos5YU22uwLLDTWLOpJKxV7cS0a/XmVirxoROLZoy3iXH+kDyVjHJQAANaDkhxx1nRvuJTDSOHrqrpIe75MaD496LDI/n6g+aiWA56nxUvhd58gB4IbBIIRz45iipNkJ/Fu9xUHOadKyyoHs7lpwH8P8Aj0RYUMDDns8XWfZQIdwo9362pRu/L5I7JAKoa8s1k8lGix2CaHnQE+HosMTidCPBNNebtw3W8ybcT/LSBJKeAy78/IUkpyfQ3BLsx0Lhw81H4PM1fIkqDMQRrVeH+Siftp4DPvrLwCf3F9TToPzgd+94WgkOzG80gnkT7qUkrjnQ+fqFJr7GevK1SvsW3QKPAk8vJTdhwNa+uwJiABwBANdt5hbMrWnqjPxPlwUub6KUF2JzRFp00rU8/Zba0UK3b4i9PXNFfNz6xJ5Za8exCxMpB3abk0W4i7PZyRqDS/RJhrLj4FDc/wCv9I0Ja46DdFh1DMEe+ZC26gau/b2sJakDixf45P8Ar50gyWdQfNP23ifkfJLOe28v8qhAd45cOzW1MEdo7h7Xoturl3UhNdWmvgikG5PcHN3jVLdFuYzHHs+SXOIeBQquW6D60pHEPP8AqgjcNiZkOnNDc0jO8q8ltzqoDLmbvP5LOsdb907CgBfyvXtUm71n6NcclNri3W651RWpXg8M+fFF7hptE24usjR5LXx7NV80jMw1xHLvUsxx/wAp2TQ46fgTXhqgyUeHklzLzCA/EBoHrnmmkw2JOwTSbAPkVifjlZQz7q5cFinyfwegCCBWZTeHOV0O+lixXJ0rJirdDEYOoHsAsdGd3e0vLPPxrv8AdYsXN5JM38aRNpaB1c+++IsFTe4AWRZ5LSxVGCfIpTa4ItxQGjAez/a22aR2lN50sWLTSlwjPU3yycWHcTbjfufHwR2Ydp1z7FixRKTLjBExFHR6uY1rs90tMaNtbx5+HNbWKYSfI5xSIfFsXVd9H1AUH2RoPT2WLFpZFDGHndxNUDx8kq17t7Pv7Pf6tYsUJJs0bpGmtyoAZk2dOsdUY4Uve52dZZWNeIHZx8VpYlNUOLGoMM1jbArWuedpXE63WeuRy9VixCQMRlfnpQ459qkSOA071ixadGfZMwkEOYfDtTeHwe9vFx0PW5jur2WLFjKTRrFJlbiWFpICA53ArFi6EYs20A5+F962yTh4LFillxRJr6B+vNac86cxoK91ixNolOzGy+n1Si97ToCOdrFiXYwboz3JHERHTRYsVxZElQs2aRmTartFrFixNpEn/9k=" ,
//  descricao:"Mamute"},
//  ]
}