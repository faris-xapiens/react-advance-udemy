import { mount } from "enzyme";
import Root from "Root";
import moxios from "moxios";

import App from "components/App";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("https://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "Fetched #1" }, { name: "Fetched #2" }],
  });
});

afterEach(() => {
  moxios.uninstall();
});

it("can fetch a list of comments and display them", (done) => {
  // Attempt to render the *entire* app as
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  // find the 'fetchComments' button and click import
  wrapped.find(".fetch-comments").simulate("click");

 moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find("li").length).toEqual(2);

    done();
    wrapped.unmount()
  });

  // Expect to find a list of comments
});
