const models = {
  user: {
    name: '',
    userKey: '',
    id: '',
    birthDate: '',
    mainUploadedFile: '', // from file 적절한 형식? file path? file name?
    partnerUploadedFile: '',
    basic: {
      b1: [],
      b2: [],
      b3: [],
    },
    item: {
      i1: {
        field1: false,
        field2: false,
        field3: false,
        field4: false,
        field5: false,
        field6: false,
        field7: false,
        field8: false,
        field9: false,
        field10: '',
        field11: '',
        field12: '',
        field13: '',
      }, // 전세자금대출
      i2: {
        filed1: false,
        filed2: false,
        field1: false,
        field3: false,
        field4: false,
        filed5: false,
        field6: false,
        filed7: false,
        field8: false,
        field9: false,
        field10: false,
        field11: false,
        field12: '',
        field13: '',
        field14: '',
        field15: '',
        field16: '',
        field17: false,
        field18: false,
        field19: '',
      }, // 주택담보대출
      i3: {
        field1: false,
        field2: false,
        field3: false,
        field4: false,
        field5: false,
        field6: false,
        field7: false,
        field8: '',
        field9: '',
        field10: '',
        field11: '',
      }, // 주택청약종합저축
      i4: {
        field1: '',
        field2: '',
        field3: '',
        field4: '',
        field5: '',
        field6: '',
      }, // 신용카드
      i5: {
        field1: '',
        field2: '',
        field3: '',
        field4: '',
        field5: '',
        field6: '', // 추가 정보 삽입 필요
        field7: '',
        field8: '',
        field9: '',
        field10: '', // 추가 정보 삽입 필요
        field11: '',
        field12: '',
        field13: '',
        field14: '',
      }, // 의료비
      i6: {
        field1: '',
        field2: '',
        field3: '', // 추가 정보 삽입 필요
        field4: false,
        field5: false,
        field6: '',
        field7: '', // 추가 정보 삽입 필요
        field8: false,
        field9: false,
        field10: false,
        field11: '',
        field12: '',
        field13: '',
        field14: '',
      }, // 교육비
      i7: {
        field1: '',
        field2: '',
        field3: '', // 추가 정보 삽입 필요
        field4: '',
        field5: '',
        field6: '',
        field7: '',
        field8: '',
        field9: '',
        field10: '',
      }, // 기부금
      i8: {
        field1: false,
        field2: false,
        field3: false,
        field4: false,
        field5: false,
        field6: false,
        field7: false,
        field8: false,
        field9: '',
        field10: '',
        field11: '',
      }, // 월세액
    },
  },
};
export default models;

export const mapToFieldList = (collectionName, fieldsName, selector) => {
  if (selector) {
    switch (selector) {
      case '조부':
      case '조모':
      case '외조부':
      case '외조모':
      case '(계)부':
      case '(계)모':
      case '배우자 조부':
      case '배우자 조모':
      case '배우자외조부':
      case '배우자 외조모':
      case '배우자 (계)부':
      case '배우자 (계)모':
        return {
          type: selector,
          field1: false,
          field2: false,
          field3: false,
          field4: '',
          field5: '',
          field6: '',
          field7: '',
          field8: '',
          field9: '',
          field10: '',
        };
      case '친모':
      case '배우자 친모':
        return {
          type: selector,
          field1: false,
          field2: false,
          field3: false,
          field4: false,
          field5: '',
          field6: '',
          field7: '',
          field8: '',
          field9: '',
          field10: '',
          field11: '',
        };
      case '자녀':
      case '손자녀':
      case '위탁아동':
      case '입양자':
        return {
          field1: false,
          field2: false,
          field3: '',
          field4: '',
          field5: '',
          field6: '',
          field7: '',
          field8: '',
          field9: '',
          field10: '',
          field11: '',
        };
      case '형제자매':
      case '배우자 형제자매':
      case '기초수급자':
        return {
          field1: false,
          field2: false,
          field3: false,
          field4: '',
          field5: '',
          field6: '',
          field7: '',
          field8: '',
          field9: '',
          field10: '',
          field11: '',
          field12: '',
        };
    }
  }

  return models.user[collectionName][fieldsName];
};

export const basicSelectorOption1 = [
  '조부',
  '조모',
  '외조부',
  '외조모',
  '(계)부',
  '(계)모',
  '배우자 조부',
  '배우자 조모',
  '배우자외조부',
  '배우자 외조모',
  '배우자 (계)부',
  '배우자 (계)모',
  '친모',
  '배우자 친모',
];

export const basicSelectorOption2 = ['자녀', '손자녀', '위탁아동', '입양자'];

export const basicSelectorOption3 = [
  '형제자매',
  '배우자 형제자매',
  '기초수급자',
];
