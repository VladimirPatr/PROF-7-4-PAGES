const articlesWrapper=document.querySelector(".blog__carts"),blogPagination=document.querySelector(".blog__pagination"),containerPag=document.querySelector(".container-pagination"),arrowBtn=document.getElementsByClassName("btn-arrow"),loadArticles=async n=>{const a=`https://gorest.co.in/public-api/posts?page=${window.location.search.substring(6)}`,e=await fetch(a);n(await e.json())},renderArticle=n=>{const a=n.data,e=document.createElement("ul");e.className="news-wrapper";let t=0;const i=a.map((n=>{t++;const a=document.createElement("li");return a.className="news-cart",a.insertAdjacentHTML("beforeend",`<a href="#" class="img-crop">\n                <img src="./img/blog-img-${t}.png" alt="">\n            </a>          \n            <div class="news-text__wrapper">\n                <a href= "article.html?id= ${n.id}">${n.title}</a>\n                <p>29 октября 2020, 12:42</p>\n                <div class = "icons-wrapper">\n                    <p>1.9K</p>\n                    <p>0</p>\n                </div>\n            </div>\n            \n            `),a}));e.append(...i),articlesWrapper.append(e)},renderPagination=async()=>{const n=await fetch("https://gorest.co.in/public-api/posts?page=1"),a=(await n.json()).meta.pagination.pages,e=new URLSearchParams(window.location.search);let t=Number(e.get("page"));return(t<=0||null==t)&&(t=1),t>a-3&&1!=a&&(t=a-3),containerPag.insertAdjacentHTML("beforeend",`<a href="blog.html?page = ${t-1}" class="btn-arrow-left btn-arrow">\n                <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">\n                    <g clip-path="url(#clip0_0_255)">\n                    <path d="M32.375 16.9583H10.5296L16.0487 11.4237L13.875 9.25L4.625 18.5L13.875 27.75L16.0487 25.5763L10.5296 20.0417H32.375V16.9583Z" fill="#8F8F8F"/>\n                    </g>\n                    <defs>\n                    <clipPath id="clip0_0_255">\n                    <rect width="37" height="37" fill="white"/>\n                    </clipPath>\n                    </defs>\n                </svg>\n            </a>\n                <ul class="pagination-list">\n                    <li class="pagination-item "><a href="blog.html?page =${t}">${t}</a></li>\n                    <li class="pagination-item" ><a href="blog.html?page=${t+1}">${t+1}</a></li>\n                    <li class="pagination-item"><a href="blog.html?page=${t+2}">${t+2}</a></li>\n                </ul>\n                <a href="blog.html?page=${t+3}" class = "btn-arrow-right btn-arrow ">\n                    <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">\n                    <g clip-path="url(#clip0_0_258)">\n                    <path d="M4.625 16.9583H26.4704L20.9513 11.4237L23.125 9.25L32.375 18.5L23.125 27.75L20.9513 25.5763L26.4704 20.0417H4.625V16.9583Z" fill="#8F8F8F"/>\n                    </g>\n                    <defs>\n                    <clipPath id="clip0_0_258">\n                    <rect width="37" height="37" fill="white" transform="matrix(-1 0 0 1 37 0)"/>\n                    </clipPath>\n                    </defs>\n                    </svg>\n                </a>\n            `),containerPag};loadArticles(renderArticle),renderPagination();