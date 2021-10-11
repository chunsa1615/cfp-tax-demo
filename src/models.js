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
        isModified: false,
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
        isModified: false,
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
        isModified: false,
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
        isModified: false,
        field1: '',
        field2: '',
        field3: '',
        field4: '',
        field5: '',
        field6: '',
      }, // 신용카드
      i5: {
        isModified: false,
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
        isModified: false,
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
        isModified: false,
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
        isModified: false,
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

export const mapToFields = (collectionName, fieldsName, selector) => {
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

export const mapToFieldsLabel = (fieldsName, selector) => {
  switch (fieldsName) {
    case 'b1':
      // prettier-ignore
      return selector === '친모' || selector === '배우자 친모'
        ? {
          field1: { type: 'check', label: '' },
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
        }
        : {
          field1: { type: 'check', label: '' },
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
    case 'i1':
      return [
        { type: 'check', label: '세대주', filedIndex: 1 },
        {
          type: 'check',
          label: '세대원(세대주가 공제 안 받음)',
          filedIndex: 2,
        },
        { type: 'check', label: '2020년도 말 주택 미보유 세대', filedIndex: 3 },
        { type: 'check', label: '금융기관에서 차입', filedIndex: 4 },
        {
          type: 'check',
          label: '한국에 거주하는 개인에게 차입',
          filedIndex: 5,
        },
        { type: 'subCheck', label: '임대차계약증서 있음', filedIndex: 6 },
        { type: 'subCheck', label: '금전소비대차계약서 있음', filedIndex: 7 },
        { type: 'subCheck', label: '원리금 영수증/입금증 있음', filedIndex: 8 },
        { type: 'subCheck', label: '대출금리 연 1.8% 이상', filedIndex: 9 },
        { type: 'date', label: '전입일/입주일/연장일(빠른날)', filedIndex: 10 },
        { type: 'date', label: '대출일', filedIndex: 11 },
        { type: 'won', label: '상환원리금', filedIndex: 12 },
        { type: 'string', label: '기타문의', filedIndex: 13 },
      ];
    case 'i2':
      return [
        { type: 'check', label: '세대주', filedIndex: 1 },
        {
          type: 'check',
          label: '세대원(세대주 주택자금 공제 안 받음)',
          filedIndex: 2,
        },
        { type: 'subCheck', label: '실제 거주 중', filedIndex: 3 },
        { type: 'check', label: '근로자 = 채무자 = 소유자', filedIndex: 4 },
        { type: 'check', label: '채무인수 대출', filedIndex: 5 },
        { type: 'check', label: '금융기관 변경', filedIndex: 6 },
        { type: 'subCheck', label: '3회 이하 변경', filedIndex: 7 },
        { type: 'check', label: '중도금대출(무주택세대주)', filedIndex: 8 },
        { type: 'check', label: '장기주택대출 전환조건', filedIndex: 9 },
        { type: 'check', label: '오피스텔 아님', filedIndex: 10 },
        { type: 'check', label: '채무인수 대출', filedIndex: 11 },
        {
          type: 'none',
          label: `주택 수 포함
          - 무허가 주택
          - 농가주택
          - 사업용 주택
          - 지분이 가장 큰 상속 주택
          `,
        },
        { type: 'won', label: '취득기준시가/분양가', filedIndex: 12 },
        { type: 'date', label: '소유권이전/보존등기(빠른날)', filedIndex: 13 },
        {
          type: 'date',
          label: '대출일 (채무인수/금융기관변경 시 최초 대출일)',
          filedIndex: 14,
        },
        { type: 'date', label: '전입일/입주일/연장일(빠른날)', filedIndex: 15 },
        { type: 'won', label: '상환이자', filedIndex: 16 },
        { type: 'check', label: '5년이상 고정금리', filedIndex: 17 },
        {
          type: 'check',
          label: '거치 없이 바로 원금 분할상환',
          filedIndex: 18,
        },
        { type: 'string', label: '기타문의', filedIndex: 19 },
      ]; // 주택담보대출
    case 'i3':
      return [
        { field1: false },
        { field2: false },
        { field3: false },
        { field4: false },
        { field5: false },
        { field6: false },
        { field7: false },
        { field8: '' },
        { field9: '' },
        { field10: '' },
        { field11: '' },
      ]; // 주택청약종합저축
    case 'i4':
      return [
        { field1: '' },
        { field2: '' },
        { field3: '' },
        { field4: '' },
        { field5: '' },
        { field6: '' },
      ]; // 신용카드
    case 'i5':
      return [
        { field1: '' },
        { field2: '' },
        { field3: '' },
        { field4: '' },
        { field5: '' },
        { field6: '' }, // 추가 정보 삽입 필요
        { field7: '' },
        { field8: '' },
        { field9: '' },
        { field10: '' }, // 추가 정보 삽입 필요
        { field11: '' },
        { field12: '' },
        { field13: '' },
        { field14: '' },
      ]; // 의료비
    case 'i6':
      return [
        { field1: '' },
        { field2: '' },
        { field3: '' }, // 추가 정보 삽입 필요
        { field4: false },
        { field5: false },
        { field6: '' },
        { field7: '' }, // 추가 정보 삽입 필요
        { field8: false },
        { field9: false },
        { field10: false },
        { field11: '' },
        { field12: '' },
        { field13: '' },
        { field14: '' },
      ]; // 교육비
    case 'i7':
      return [
        { field1: '' },
        { field2: '' },
        { field3: '' }, // 추가 정보 삽입 필요
        { field4: '' },
        { field5: '' },
        { field6: '' },
        { field7: '' },
        { field8: '' },
        { field9: '' },
        { field10: '' },
      ]; // 기부금
    case 'i8':
      return [
        { field1: false },
        { field2: false },
        { field3: false },
        { field4: false },
        { field5: false },
        { field6: false },
        { field7: false },
        { field8: false },
        { field9: '' },
        { field10: '' },
        { field11: '' },
      ]; // 월세액
  }
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
