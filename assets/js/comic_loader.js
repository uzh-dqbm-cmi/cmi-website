 $(document).ready(function(){
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
    const comicSites = ['https://xkcd.com/atom.xml', 'https://phdcomics.com/gradfeed.php'];
    const randomChoice = Math.floor(Math.random() * comicSites.length);

    // case of xkcd coimcs 
    if(randomChoice == 0){
      $.ajax({
        type: 'GET',
        url: CORS_PROXY + comicSites[randomChoice],
        crossDomain: true,
        dataType: 'xml',
        success: parseXKCD
        });

    }else{
      let parser = new RSSParser();
      parser.parseURL(CORS_PROXY + comicSites[randomChoice], function(err, feed) {
        // console.log(feed.title);
        // console.log(feed.items);
        // console.log(feed.items.length);
        // choose one of the items at random
        const numComics = feed.items.length;
        const chosenComic = feed.items[Math.floor(Math.random() * numComics)];
        // console.log(chosenComic);
        $("#comics_area").append(chosenComic.content);
        // remove the addtional parts for now
        $("#comics_area > center:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1)").remove();
        $("#comics_area > center:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(1) > div:nth-child(1) > p:nth-child(2)").remove();
        });
    }

    function parseXKCD(xml){
      const comicList = $(xml).find('entry');
    //   console.log(comicList.length);
      const randomChoice = Math.floor(Math.random() * comicList.length);
    //   console.log(randomChoice);
    //   console.log(comicList);
      const chosenComic = comicList[randomChoice];
    //   console.log(chosenComic);
      const xkcd_html = chosenComic.textContent.split("<")[1];
      $('#comics_area').append('<' + xkcd_html);
      $('#comics_area').append('<p> Source: <a href="https://xkcd.com">xkcd</a></p>');
    }
  });
