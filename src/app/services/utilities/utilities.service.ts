import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilitiesService {
  constructor() {}

  /**
   * Prints Error Message
   *
   * @param {*} errors
   * @memberof Utilities
   */
  parseError(errors: any) {
    if (errors) {
      let errorMessage = '';

      for (const [key, value] of Object.entries(errors)) {
        let entryValue: any = [];

        entryValue = value;

        if (entryValue.length !== 0) {
          for (let i = 0; i < entryValue.length; i++) {
            errorMessage += entryValue[i] + '<br>';
          }
        }
      }

      return errorMessage;
    } else {
      return 'Something Went Wrong!';
    }
  }

  convertModelToFormData(val, formData = new FormData(), namespace = '') {
    if (typeof val !== 'undefined' && val !== null) {
      if (val instanceof Date) {
        formData.append(namespace, val.toISOString());
      } else if (val instanceof Array) {
        for (let i = 0; i < val.length; i++) {
          this.convertModelToFormData(
            val[i],
            formData,
            namespace + '[' + i + ']'
          );
        }
      } else if (typeof val === 'object' && !(val instanceof File)) {
        for (let propertyName in val) {
          if (val.hasOwnProperty(propertyName)) {
            this.convertModelToFormData(
              val[propertyName],
              formData,
              namespace ? `${namespace}[${propertyName}]` : propertyName
            );
          }
        }
      } else if (val instanceof File) {
        formData.append(namespace, val);
      } else {
        formData.append(namespace, val.toString());
      }
    }
    return formData;
  }
}
