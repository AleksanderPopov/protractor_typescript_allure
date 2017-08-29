import { InboxPage } from './../pageobjects/InboxPage';
import { LoginPage } from './../pageobjects/LoginPage';

describe('protractorjs tests', function () {
  const loginPage: LoginPage = new LoginPage();
  const inboxPage: InboxPage = new InboxPage();
  const email: string = "aleksander.popov.93@gmail.com";
  const password: string = "";
  const messageTopic: string = "unic topic21";

  it('gmail test', async () => {
    await loginPage.open();
    await loginPage.loginAs(email, password);
    await inboxPage.composeEmail()
              .then(async it => await it.withRecipients('aleksander.popov.93@gmail.com')
              .then(async it => await it.withTopic(messageTopic)
              .then(async it => await it.send())));
    await inboxPage.search(messageTopic);
    await inboxPage.emails()
      .then(async it => await it.shouldHaveTopics(messageTopic));
  });

  it('some strange test', () => {
    expect(true).toBe(false);
  });

});