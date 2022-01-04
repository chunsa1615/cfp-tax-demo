const models = {
  user: {
    name: '',
    userKey: '',
    ID: '',
    birthDate: '',
    main_uploaded_file: [], // from file 적절한 형식? file path? file name?
    partner_uploaded_file: [],
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
        field1: false,
        field2: false,
        field3: false,
        field4: false,
        field5: false,
        field6: false,
        field7: false,
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
      i9: {
        isModified: false,
        field1: '',
      },
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
          field11: '',
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
          field12: '',
        };
      case '자녀':
      case '손자녀':
      case '위탁아동':
      case '입양자':
        return {
          type: selector,
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
        ? [
          { type: 'check', label: '신고 소득 500만원이하', fieldIndex: 1 },
          { type: 'check', label: '타 가족 기본공제  안받음', fieldIndex: 2 },
          { type: 'check', label: '인우확인서 증빙 가능', fieldIndex: 3 },
          { type: 'check', label: '2020년 사망', fieldIndex: 4 },
          { type: 'number', label: '출생년도', fieldIndex: 5 },
          { type: 'string', label: '지병명', fieldIndex: 6 },
          { type: 'date', label: '약 먹기 시작한 월', fieldIndex: 7 },
          {
            type: 'none',
            label: `※ 다른 가족이 공제 받지 않은 금액`
          },
          { type: 'won', label: '의료비', fieldIndex: 8 },
          { type: 'won', label: '신용카드 등', fieldIndex: 9 },
          { type: 'won', label: '종교기부금', fieldIndex: 10 },
          { type: 'won', label: '보장성보험료', fieldIndex: 11 },
          { type: 'textarea', label: '기타문의', fieldIndex: 12 },
        ]
        : [
          { type: 'check', label: '신고 소득 500만원이하', fieldIndex: 1 },
          { type: 'check', label: '타 가족 기본공제  안받음', fieldIndex: 2 },
          { type: 'check', label: '2020년 사망', fieldIndex: 3 },
          { type: 'number', label: '출생년도', fieldIndex: 4 },
          { type: 'string', label: '지병명', fieldIndex: 5 },
          { type: 'date', label: '약 먹기 시작한 월', fieldIndex: 6 },
          {
            type: 'none',
            label: `※ 다른 가족이 공제 받지 않은 금액`
          },
          { type: 'won', label: '의료비', fieldIndex: 7 },
          { type: 'won', label: '신용카드 등', fieldIndex: 8 },
          { type: 'won', label: '종교기부금', fieldIndex: 9 },
          { type: 'won', label: '보장성보험료', fieldIndex: 10 },
          { type: 'textarea', label: '기타문의', fieldIndex: 11 },
        ];
    case 'b2':
      return [
        { type: 'check', label: '신고 소득 500만원이하', fieldIndex: 1 },
        { type: 'check', label: '타 가족 기본공제  안받음', fieldIndex: 2 },
        { type: 'number', label: '출생년도', fieldIndex: 3 },
        { type: 'string', label: '지병명', fieldIndex: 4 },
        { type: 'date', label: '약 먹기 시작한 월', fieldIndex: 5 },
        {
          type: 'none',
          label: `※ 다른 가족이 공제 받지 않은 금액`,
        },
        { type: 'won', label: '의료비', fieldIndex: 6 },
        { type: 'won', label: '교육비 (해외포함)', fieldIndex: 7 },
        { type: 'won', label: '신용카드 등', fieldIndex: 8 },
        { type: 'won', label: '종교기부금', fieldIndex: 9 },
        { type: 'won', label: '보장성보험료', fieldIndex: 10 },
        { type: 'textarea', label: '기타문의', fieldIndex: 11 },
      ];
    case 'b3':
      return [
        { type: 'check', label: '신고 소득 500만원이하', fieldIndex: 1 },
        { type: 'check', label: '타 가족 기본공제  안받음', fieldIndex: 2 },
        { type: 'check', label: '주민등록 동거 또는 일시 퇴거', fieldIndex: 3 },
        { type: 'number', label: '출생년도', fieldIndex: 4 },
        { type: 'string', label: '지병명', fieldIndex: 5 },
        { type: 'date', label: '약 먹기 시작한 월', fieldIndex: 6 },
        {
          type: 'none',
          label: `※ 다른 가족이 공제 받지 않은 금액`,
        },
        { type: 'won', label: '의료비', fieldIndex: 7 },
        { type: 'won', label: '교육비 (해외포함)', fieldIndex: 8 },
        { type: 'won', label: '신용카드 등', fieldIndex: 9 },
        { type: 'won', label: '종교기부금', fieldIndex: 10 },
        { type: 'won', label: '보장성보험료', fieldIndex: 11 },
        { type: 'textarea', label: '기타문의', fieldIndex: 12 },
      ];
    case 'i1':
      return [
        { type: 'check', label: '세대주', fieldIndex: 1 },
        {
          type: 'check',
          label: '세대원(세대주가 공제 안 받음)',
          fieldIndex: 2,
        },
        { type: 'check', label: '2020년도 말 주택 미보유 세대', fieldIndex: 3 },
        { type: 'check', label: '금융기관에서 차입', fieldIndex: 4 },
        {
          type: 'check',
          label: '한국에 거주하는 개인에게 차입',
          fieldIndex: 5,
        },
        { type: 'subCheck', label: '임대차계약증서 있음', fieldIndex: 6 },
        { type: 'subCheck', label: '금전소비대차계약서 있음', fieldIndex: 7 },
        { type: 'subCheck', label: '원리금 영수증/입금증 있음', fieldIndex: 8 },
        { type: 'subCheck', label: '대출금리 연 1.8% 이상', fieldIndex: 9 },
        { type: 'date', label: '전입일/입주일/연장일(빠른날)', fieldIndex: 10 },
        { type: 'date', label: '대출일', fieldIndex: 11 },
        { type: 'won', label: '상환원리금', fieldIndex: 12 },
        { type: 'textarea', label: '기타문의', fieldIndex: 13 },
      ];
    case 'i2':
      return [
        { type: 'check', label: '세대주', fieldIndex: 1 },
        {
          type: 'check',
          label: '세대원(세대주 주택자금 공제 안 받음)',
          fieldIndex: 2,
        },
        { type: 'subCheck', label: '실제 거주 중', fieldIndex: 3 },
        { type: 'check', label: '근로자 = 채무자 = 소유자', fieldIndex: 4 },
        { type: 'check', label: '채무인수 대출', fieldIndex: 5 },
        { type: 'check', label: '금융기관 변경', fieldIndex: 6 },
        { type: 'subCheck', label: '3회 이하 변경', fieldIndex: 7 },
        { type: 'check', label: '중도금대출(무주택세대주)', fieldIndex: 8 },
        { type: 'check', label: '장기주택대출 전환조건', fieldIndex: 9 },
        { type: 'check', label: '오피스텔 아님', fieldIndex: 10 },
        {
          type: 'check',
          label: '과세 년도 말 세대 1주택 보유',
          fieldIndex: 11,
          helperText: `주택 수 포함: 무허가 주택, 농가주택, 사업용 주택, 지분이 가장 큰 상속 주택`,
        },
        { type: 'won', label: '취득기준시가/분양가', fieldIndex: 12 },
        { type: 'date', label: '소유권이전/보존등기(빠른날)', fieldIndex: 13 },
        {
          type: 'date',
          label: '대출일 (채무인수/금융기관변경 시 최초 대출일)',
          fieldIndex: 14,
        },
        { type: 'date', label: '전입일/입주일/연장일(빠른날)', fieldIndex: 15 },
        { type: 'won', label: '상환이자', fieldIndex: 16 },
        { type: 'check', label: '5년이상 고정금리', fieldIndex: 17 },
        {
          type: 'check',
          label: '거치 없이 바로 원금 분할상환',
          fieldIndex: 18,
        },
        { type: 'textarea', label: '기타문의', fieldIndex: 19 },
      ]; // 주택담보대출
    case 'i3':
      return [
        { type: 'check', label: '세대주', fieldIndex: 1 },
        {
          type: 'subCheck',
          label: '세대 주택 미보유',
          fieldIndex: 2,
        },
        { type: 'check', label: '주택청약종합저축', fieldIndex: 3 },
        {
          type: 'subCheck',
          label: '금융기관무주택 확인서 제출',
          fieldIndex: 4,
        },
        { type: 'check', label: '청약저축', fieldIndex: 5 },
        {
          type: 'subCheck',
          label:
            '기준시가 3억이하(청약 가입일 기준) 1주택이하 보유 또는 주택 미보유',
          fieldIndex: 6,
        },
        { type: 'check', label: '당첨 후 중도해지', fieldIndex: 7 },
        { type: 'date', label: '가입일', fieldIndex: 8 },
        { type: 'date', label: '해지일', fieldIndex: 9 },
        { type: 'won', label: '저축액', fieldIndex: 10 },
        { type: 'textarea', label: '기타문의', fieldIndex: 11 },
      ]; // 주택청약종합저축
    case 'i4':
      return [
        {
          type: 'none',
          label: `▶ 본인 사용금액 정보`,
        },
        { type: 'won', label: '신용카드', fieldIndex: 1 },
        { type: 'won', label: '현금/체크/직불', fieldIndex: 2 },
        { type: 'won', label: '대중교통이용', fieldIndex: 3 },
        { type: 'won', label: '전통시장이용', fieldIndex: 4 },
        { type: 'won', label: '도서,공연,박물관,미술관 이용', fieldIndex: 5 },
        { type: 'textarea', label: '기타문의', fieldIndex: 6 },
      ]; // 신용카드
    case 'i5':
      return [
        {
          type: 'none',
          label: `▶ 2020년도에 다른 가족이 ‘기본공제 받지 않은’ 직계존비속, 형제자매 등의 의료비(안경/렌즈 포함)를 입력해주세요(소득, 나이 제한 없음)`,
        },
        { type: 'won', label: '65세이상 직계존속', fieldIndex: 1 },
        { type: 'won', label: '장애인', fieldIndex: 2 },
        { type: 'won', label: '직계존속', fieldIndex: 3 },
        { type: 'won', label: '형제자매', fieldIndex: 4 },
        { type: 'won', label: '위 외 부양가족', fieldIndex: 5 },
        { type: 'number', label: '총 입력인원', fieldIndex: 6 },
        {
          type: 'none',
          label: `▶ 본인 의료비 중 공제받지 않은 아래 항목이 있으면 입력해 주세요`,
        },
        { type: 'won', label: '안경/콘텍트 지출비용', fieldIndex: 7 },
        { type: 'number', label: '출산횟수 (쌍둥이 1회)', fieldIndex: 8 },
        { type: 'won', label: '산후조리비용', fieldIndex: 9 },
        { type: 'won', label: '난임시술비', fieldIndex: 10 },
        {
          type: 'none',
          label: `▶ 배우자,자녀 의료비(안경/렌즈,난임 포함) 중 본인이 공제 받지 않은 의료비를  입력해 주세요`,
        },
        { type: 'won', label: '배우자', fieldIndex: 11 },
        { type: 'won', label: '자녀', fieldIndex: 12 },
        { type: 'number', label: '자녀인원', fieldIndex: 13 },
        { type: 'textarea', label: '기타문의', fieldIndex: 14 },
      ]; // 의료비
    case 'i6':
      return [
        {
          type: 'none',
          label: `▶ 미취학자녀 연간 교육비`,
        },
        { type: 'won', label: '어린이집', fieldIndex: 1 },
        { type: 'won', label: '학원', fieldIndex: 2 },
        { type: 'won', label: '체육시설', fieldIndex: 3 },
        {
          type: 'none',
          label: `▶ 고등, 대학생 자녀 국외 유학비`,
        },
        { type: 'check', label: '국외교육기관 입증서류 가능', fieldIndex: 4 },
        { type: 'check', label: '국외 교육비 납입영수증 가능', fieldIndex: 5 },
        { type: 'won', label: '국외 고등학교', fieldIndex: 6 },
        { type: 'won', label: '국외 대학교', fieldIndex: 7 },
        {
          type: 'none',
          label: `▶ (배우자의)형제자매 연간 교육비`,
        },
        { type: 'check', label: '형제자매 소득 100만원 이하', fieldIndex: 8 },
        { type: 'check', label: '국외교육기관 입증서류 가능', fieldIndex: 9 },
        { type: 'check', label: '국외 교육비 납입영수증 가능', fieldIndex: 10 },
        { type: 'number', label: '인원', fieldIndex: 11 },
        { type: 'won', label: '국내 대학교', fieldIndex: 12 },
        { type: 'won', label: '국외 대학교', fieldIndex: 13 },
        { type: 'textarea', label: '기타문의', fieldIndex: 14 },
      ]; // 교육비
    case 'i7':
      return [
        {
          type: 'none',
          label: `▶ 직계존비속, 형제자매의 기부금`,
        },
        { type: 'won', label: '법정기부', fieldIndex: 1 },
        { type: 'won', label: '종교단체', fieldIndex: 2 },
        { type: 'won', label: '종교단체외', fieldIndex: 3 },
        {
          type: 'none',
          label: `▶ 본인 기부금`,
        },
        { type: 'won', label: '정치기부', fieldIndex: 4 },
        { type: 'won', label: '법정기부', fieldIndex: 5 },
        { type: 'won', label: '우리사주 조합기부', fieldIndex: 6 },
        { type: 'won', label: '종교단체', fieldIndex: 7 },
        { type: 'won', label: '종교단체외', fieldIndex: 8 },
        { type: 'won', label: '특별재난지역 자원봉사', fieldIndex: 9 },
        { type: 'textarea', label: '기타문의', fieldIndex: 10 },
      ]; // 기부금
    case 'i8':
      return [
        { type: 'check', label: '무주택 세대주', fieldIndex: 1 },
        { type: 'check', label: '세대원', fieldIndex: 2 },
        {
          type: 'subCheck',
          label: '세대주가 월세액공제  안받음',
          fieldIndex: 3,
        },
        {
          type: 'subCheck',
          label: '세대주가 전월세공제 안받음',
          fieldIndex: 4,
        },
        {
          type: 'subCheck',
          label: '세대주가 주택대출공제 안받음',
          fieldIndex: 5,
        },
        {
          type: 'subCheck',
          label: '세대주가 청약저축공제 안받음',
          fieldIndex: 6,
        },
        { type: 'check', label: '국민주택규모 임차', fieldIndex: 7 },
        { type: 'check', label: '기준시가 3억원 이하 임차', fieldIndex: 8 },
        { type: 'won', label: '종합소득금액', fieldIndex: 9 },
        { type: 'won', label: '월세액', fieldIndex: 10 },
        { type: 'textarea', label: '기타문의', fieldIndex: 11 },
      ]; // 월세액
    case 'i9':
      return [
        { type: 'upload', label: '배우자의 2020년도 원천징수영수증 업로드' },
        { type: 'textarea', label: '기타문의', fieldIndex: 1 },
      ];
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
