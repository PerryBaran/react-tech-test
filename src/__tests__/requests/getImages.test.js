import getImages from "../../requests/getImages";
import axios from "axios";

describe("getImages", () => {
  const mockReturn = {
    data: {
      collection: {
        items: [
          {
            data: [
              {
                media_type: "image",
              },
            ],
            links: [
              {
                href: "link 1",
              },
            ],
          },
          {
            data: [
              {
                media_type: "image",
              },
            ],
            links: [
              {
                href: "link 2",
              },
            ],
          },
        ],
      },
    },
  };

  test("returns empty array if not passed a query", async () => {
    const response = await getImages();
    expect(response).toHaveLength(0);
  });

  test("returns correct data if passed a query", async () => {
    jest.spyOn(axios, "get").mockResolvedValue(mockReturn);
    const response = await getImages("string");

    expect(response).toHaveLength(2);
    response.forEach((element, i) => {
      const expectedValue = mockReturn.data.collection.items[i].links[0].href;
      expect(element).toEqual(expectedValue);
    });
  });
});
