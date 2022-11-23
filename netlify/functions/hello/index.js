import fetch from "node-fetch";

export const handler = async (event) => {
  console.log(event);
  const result = await fetch(
    "https://mandarin.api.weniv.co.kr/product/detail/635b667617ae666581af6ed5",
    {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNTViM2MxMTdhZTY2NjU4MWFmNmMwMiIsImV4cCI6MTY3MTg4NTE5MywiaWF0IjoxNjY2NzAxMTkzfQ.-fCovo_Nbuw2FIc2lHpKwOK2lp7WA6N0eymgslpOgC4",
      },
    }
  );
  const body = await result.json();
  console.log(body);

  return {
    statusCode: 200,
    body: JSON.stringify(body),
  };
};
