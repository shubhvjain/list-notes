import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }
  validTypes = [
    {
      name: 'title',
      value: "Title",
      blank: {
        type: "title",
        text: "",
        subtitle: "",
        by: "",
        source: "",
        url: "",
        timestamp: ""
      }
    },
    {
      name: 'summary',
      value: "Summary",
      blank: {
        type: "summary",
        text: "",
        ref: ""
      }
    },
    {
      name: 'text',
      value: "Text",
      blank: {
        type: "text",
        text: "",
        title: ""
      }
    },
    {
      name: 'quote',
      value: "Quote",
      blank: {
        type: "quote",
        text: "",
        ref: ""
      }
    },
    {
      name: 'ref',
      value: "Reference",
      blank: {
        type: "ref",
        text: "",
        url: ""
      }
    },
    {
      name: 'check',
      value: "Checkbox",
      blank: {
        type: "check",
        text: "",
        id: 0,
        checked: false
      }
    },
    {
      name: 'def',
      value: "Definition",
      blank: {
        type: "def",
        text: "",
        term: ""
      }
    },
    {
      name: 'word',
      value: "Word",
      blank: {
        type: "word",
        text: "",
        word: ""
      }
    },
    {
      name: 'log',
      value: "Log entry",
      blank: {
        type: "log",
        text: "",
        timestamp: ""
      }
    }
  ]


  list = [
    {
      type: "title",
      text: "Some long text can come here",
      url: "https://www.noteweb.site",
      by: "Some author",
      subtitle: "Some more text",
      timestamp: "2019-03-03",
      source: "some reputed source"
    },
    {
      type: "text",
      text: "Some text can come here ... markdown and math equations also supported",
      title: "Some title comes here "
    },
    {
      type: "summary",
      text: "Some long text can come here",
      ref: "Chapter 1, page 123, para 2, line 3"
    },
    {
      type: "word",
      word: "emblematic",
      text: "Symbolic of something. You can also describe the word.or do whatever you want  "
    },
    {
      type: "quote",
      text: "Some quote text",
      ref: "Some wise man or some page # of a book"
    },
    {
      type: "ref",
      text: "some link",
      url: "http://noteweb.site"
    },
    {
      type: "check",
      checked: false,
      id: 90796848382,
      text: "Some text here"
    },
    {
      type: "def",
      term: "Something",
      text: "Defeinition can come here"
    },
    {
      type: "log",
      timestamp: "2017-12-12 12:34:56",
      text: "Some text omes here"
    },
  ];

  ngOnInit() {
  }

  blankObject(typeName) {
    let a = this.validTypes.find((item) => {
      return item.name == typeName
    })
    return a.blank;
  }


  modifyType(newType, index) {
    //console.log(newType);
    this.list[index] = JSON.parse(JSON.stringify(this.blankObject(newType)))
  }


  appendNew() {
    this.list.push(JSON.parse(JSON.stringify(this.blankObject("text"))))
  }

  deleteItem(index) {
    if (index > -1) {
      this.list.splice(index, 1);
    }
  }

  moveUp(index) {
    //console.log(idx);
    if (index >= 1) {
      let tmp = this.list[index - 1];
      this.list[index - 1] = this.list[index];
      this.list[index] = tmp;
    }

  }

  moveDown(index) {
    //console.log(idx);
    if (index < this.list.length - 1) {
      let tmp = this.list[index + 1];
      this.list[index + 1] = this.list[index];
      this.list[index] = tmp;
    }
  }

  addTime(i){
    let curDate = new Date()
    this.list[i]['timestamp'] = curDate.toString();
  }



}
