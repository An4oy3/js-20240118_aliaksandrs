import { default as SortableTableV1 } from "../../05-dom-document-loading/2-sortable-table-v1/index.js";

export default class SortableTable extends SortableTableV1 {
  sortedType={column:'Name', direction:'asc'}

  constructor(headersConfig, {
    data = [],
    sorted = {}
  } = {}) {
    super(headersConfig, data);
    this.sortedType = sorted
    this.createListener();
  }

  createListener() {
    document.addEventListener('pointerdown', this.handler());
  }

  handler() {
    super.sort('Name', 'desc');
  }

  destroy() {
    super.destroy();
  }

}



// headerData;
//   data;
//   element={};
//   subElements={};
//   sortArrow={};
//     constructor(headersConfig, {
//       data = [],
//       sorted = {}
//     } = {}) {
//       this.headerData = headersConfig;
//       this.data = data;
//       this.sortArrow={column:'Name', direction:'asc'};
//       this.element = this.renderTable();
//       this.initSubElements();
//     }

//     initSubElements() {
//       this.element.querySelectorAll('[data-element]').forEach(element => {
//         this.subElements[element.dataset.element] = element;
//       });
//     }

//     renderTable() {
//       const element = document.createElement('div');
//       element.innerHTML = this.createTemplate();
//       // console.log(element.innerHTML);
//       return element.firstChild;
//     }

//     createTemplate() {
//       return `<div data-element="productsContainer" class="products-list__container">
//                       <div class="sortable-table">
//                         ${this.createHeader()}
//                         ${this.createBody(this.createRowsBody(this.data))}
//                       </div>
//                     </div>`
//     }

    // createHeader() {
    //   const sortedDiv = `<span data-element="arrow" class="sortable-table__sort-arrow">
    //                         <span class="sort-arrow"></span>
    //                       </span>`;
    //   return `<div data-element="header" class="sortable-table__header sortable-table__row">
    //             ${this.headerData.map(el => {
    //               return `<div class="sortable-table__cell" data-id="${el.id}" data-sortable="${el.sortable}" data-order="${this.order}">
    //                           <span>${el.title}</span>
    //                           ${el.title == this.sortArrow.column ? sortedDiv : ""}
    //                       </div>`
    //             }).join('')}
    //           </div>`
    // }

//     createBody(cont) {
//       return `<div data-element="body" class="sortable-table__body">
//               ${cont}
//               </div>`;
//     }

//     createColumsBody(elem) {
//       return this.headerData.map(i => {
//         if ('template' in i) {
//           return i.template(elem[i.id]);
//         }
//         return `<div class="sortable-table__cell">${elem[i.id]}</div>`;
//       }).join('');
//     }

//     createRowsBody(arr) {
//       return arr.map(i => {
//         return `
//         <a href="/products/${i.id}" class="sortable-table__row">
//           ${this.createColumsBody(i)}
//         </a>`;
//       }).join('');
//     }



//     destroy() {
//       this.element = null;
//     }

//     remove() {
//       this.element.remove();
//     }


//     sort(field = 'title', type = 'asc') {
//       let subElems;
//       if (type == 'desc') {
//         subElems = [...this.data].sort((a,b) => {
//           if (typeof a[field] === 'string'){
//             return new Intl.Collator(["ru", "eng"]).compare(b[field], a[field]);
//           } else {
//             return b[field] - a[field];
//           }
//         });
//       } else {
//         subElems = [...this.data].sort((a,b) =>  {
//           if (typeof a[field] === 'string'){
//             return new Intl.Collator(["ru", "eng"]).compare(a[field], b[field]);
//           } else {
//             return a[field] - b[field];
//           }
//         });
//       }
//       this.subElements.body.innerHTML = this.createRowsBody(subElems);
//     }
