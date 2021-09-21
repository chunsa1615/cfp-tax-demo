const models = {
  user: {
    name: "",
    userKey: "",
    id: "",
    birthDate: "",
    mainUploadedFile: "", // from file 적절한 형식? file path? file name?
    partnerUploadedFile: "",
    basic: {
      b1: {
        field1: false,
        field2: false,
        field3: false,
        field4: "",
        field5: "",
        field6: "",
        field7: "",
        field8: "",
        field9: "",
        field10: "",
      },
      b2: {
        field1: false,
        field2: false,
        field3: false,
        field4: false,
        field5: "",
        field6: "",
        field7: "",
        field8: "",
        field9: "",
        field10: "",
        field11: "",
      },
      b3: {
        field1: false,
        field2: false,
        field3: "",
        field4: "",
        field5: "",
        field6: "",
        field7: "",
        field8: "",
        field9: "",
        field10: "",
        field11: "",
      },
      b4: {
        field1: false,
        field2: false,
        field3: false,
        field4: "",
        field5: "",
        field6: "",
        field7: "",
        field8: "",
        field9: "",
        field10: "",
        field11: "",
        field12: "",
      },
    },
    item: {
      i1: {
        field1: false,
        field2: false,
        field3: false,
        field4: false,
        field5: {
          value: false,
          field1: false,
          field2: false,
          field3: false,
          field4: false,
        },
        field6: "",
        field7: "",
        field8: "",
        field9: "",
      }, // 전세자금대출
      i2: {
        filed1: false,
        filed2: {
          value: false,
          field1: false,
        },
        field3: false,
        field4: false,
        filed5: {
          value: false,
          field1: false,
        },
        filed6: {
          value: false,
          field1: false,
        },
        field7: false,
        field8: false,
        filed9: {
          value: false,
          field1: false,
          field2: false,
          field3: false,
          field4: false,
        }, // 확인 필요
        field10: "",
        field11: "",
        field12: "",
        field13: "",
        field14: "",
        field15: false,
        field16: false,
        field17: "",
      }, // 주택담보대출
      i3: {
        field1: {
          value: false,
          field1: false,
        },
        field2: {
          value: false,
          field1: false,
        },
        field3: {
          value: false,
          field1: false,
        },
        field4: false,
        field5: "",
        field6: "",
        field7: "",
        field8: "",
      }, // 주택청약종합저축
      i4: {
        field1: "",
        field2: "",
        field3: "",
        field4: "",
        field5: "",
        field6: "",
      }, // 신용카드
      i5: {
        field1: "",
        field2: "",
        field3: "",
        field4: "",
        field5: "",
        field6: "", // 추가 정보 삽입 필요
        field7: "",
        field8: "",
        field9: "",
        field10: "", // 추가 정보 삽입 필요
        field11: "",
        field12: "",
        field13: "",
        field14: "",
      }, // 의료비
      i6: {
        field1: "",
        field2: "",
        field3: "", // 추가 정보 삽입 필요
        field4: false,
        field5: false,
        field6: "",
        field7: "", // 추가 정보 삽입 필요
        field8: false,
        field9: false,
        field10: false,
        field11: "",
        field12: "",
        field13: "",
        field14: "",
      }, // 교육비
      i7: {
        field1: "",
        field2: "",
        field3: "", // 추가 정보 삽입 필요
        field4: "",
        field5: "",
        field6: "",
        field7: "",
        field8: "",
        field9: "",
        field10: "",
      }, // 기부금
      i8: {
        field1: false,
        field2: {
          value: false,
          field1: false,
          field2: false,
          field3: false,
          field4: false,
        },
        field3: false,
        field4: false,
        field5: "",
        field6: "",
        field7: "",
      }, // 월세액
    },
  },
};
export default models;

// export const modelsLabelMap = (key) => {
//   let label = "";
//   switch (key) {
//     case "b1":

//       break;

//     default:
//       break;
//   }

// }
