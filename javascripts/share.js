let share = $(".sharing");
    let page_title = $(document).attr('title');
    let page_url = window.location.href;
    share.jsSocials({
      shares: [
        {
          share: "facebook",
          logo: "fab fa-facebook-f",
        },
        {
          share: "twitter",
          logo: "fab fa-twitter",
        },
        {
          share: "whatsapp",
          logo: "fab fa-whatsapp",
        },
      ],
      url: page_url,
      text: 'Confira o REA ' + page_title + '.',
      showLabel: false,
      showCount: false,
      shareIn: "popup",
    });