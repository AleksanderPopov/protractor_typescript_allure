import { InboxPage } from './../pageobjects/InboxPage';
import { LoginPage } from './../pageobjects/LoginPage';

describe('protractorjs tests', function () {
  const loginPage: LoginPage = new LoginPage();
  const inboxPage: InboxPage = new InboxPage();
  const email: string = "ana.tjvi@gmail.com";
  const password: string = "tjvitjvi";
  const messageTopic: string = "topic " + Date.now().toString();

  it('gmail test', async () => {
    await loginPage.open();
    await loginPage.loginAs(email, password);
    await inboxPage.composeEmail()
              .then(async it => await it.withRecipients("ana.tjvi@gmail.com")
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