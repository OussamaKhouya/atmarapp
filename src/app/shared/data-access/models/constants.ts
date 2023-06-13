


// export function downloadFilepafi(data: any, contentType, filename, type) {
//   const blob = new Blob([data], { type: contentType + '; charset=utf-8' });
//
//   if (type === 'print') {
//     const blobUrl = URL.createObjectURL(blob);
//     const iframe = document.createElement('iframe');
//     iframe.style.display = 'none';
//     iframe.src = blobUrl;
//     document.body.appendChild(iframe);
//     iframe.contentWindow.print();
//   } else {
//     // Save as PDF
//     fileSaver.saveAs(blob, filename);
//     const url = window.URL.createObjectURL(blob);
//     window.open(url, filename);
//   }
// }

export const TYPE = {
  STRING : "string",
  NUMBER : "number",
  BOOLEAN: "boolean",
  OBJECT : "object",
  INTEGER : "integer"
  };
//
export const TABLES = {
  ITEM : "item",
  CLIENT : "client",
  WAREHOUSE:"warehouse",
  PERMISSION:"permission",
  ITEMFAMILY:"itemfamily",
  FAMILY:"family",
  LEGALFORM:"legalform",
  SUPPLIER:"supplier",
  GROUP:"group",
  MARK:"mark",
  PAYMENTCHOICE:"paymentchoice",
  PARAMETERFILE:"parameterfile",
  COMPANY:"company",
  SUBFAMILY:"subfamily",
  TVA:"tva",
  UNITOFMEASURE:"unitofmeasure",
  USER:"user",
  TICKET_E:"tickete",
  TICKET_L:"ticketl",

};

  // export function getFields(form: FormGroup, obj: Object,fields : {name : string, type : string, control : FormControl}[]) {
  //   if (form) {
  //     fields.map(item =>{
  //       obj[item.name] = getFormatValue(form.get(item.name).value, item.type);
  //     })
  //   }
  // }

  function getFormatValue(value: any, type: string) {
    const isNull: boolean = (value === null || value === undefined);
    switch (type) {
      case TYPE.STRING:
        if (isNull) value = '';
        return value;
      case TYPE.NUMBER:
        value = parseFloat(value?.replace(/\s/g, ''));
        if (isNaN(value)) value = 0.00;
        return value;
      case TYPE.INTEGER:
        value = parseInt(value?.replace(/\s/g, ''));
        if (isNaN(value)) value = 0;
        return value;
      case TYPE.BOOLEAN:
        return value;
      case TYPE.OBJECT:
        console.log(value);
        if (isNull || value.code === null) return '';
        return value?.code;
      default:
        return value;
    }
  }

  //set fields
  // export function setFields(form: FormGroup, obj: Object,fields : {name : string,type : string, control : FormControl}[]) {
  //   if (form) {
  //     fields.map(item =>{
  //       form.get(item.name).setValue(getFormatedValue2(obj[item.name], item.type))
  //       console.log("name: ",item.name,"object item",obj[item.name],"type :",item.type);
  //     })
  //   }
  // }

  function getFormatedValue2(value: any, type: string): string| {code: string}{

    switch (type) {
      case TYPE.STRING:
      case TYPE.INTEGER:
      case TYPE.NUMBER:  return String(value)
      case TYPE.BOOLEAN: return (value);
      case TYPE.OBJECT:
      console.log('from obj',value);
      return { code: value };
      default: return String(value);
    }
  }
