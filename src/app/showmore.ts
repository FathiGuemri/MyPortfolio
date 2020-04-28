export function showMore (text, more) {
    document.querySelectorAll<any>(text).forEach((ele) => {
      let eleTxt  = ele.textContent
     let text =   ele.textContent.slice(0, more)
        ele.innerHTML = text +  ' ...' + 
   
        '<a href="#" class="more">more</a>'
   
        ele.children[0].onclick = (e: Event) => {
          e.preventDefault()
         ele.textContent = eleTxt
        }
       
        
       })
      
       
     }