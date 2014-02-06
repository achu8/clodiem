exports.view = function(req, res) {
  var posts = {
    'posts': [
      {
        'title': 'Looooooookin\' CHIC',
        'user': 'Anna B.',
        'comments': '17 comments',
        'likes': '41',
        'time': '17 minutes ago',
        'caption': 'Found this and just had to share!',
        'img': 'http://i.istockimg.com/file_thumbview_approve/21076093/2/stock-photo-21076093-happy-summer-girl.jpg',
        'items': [
          {
            'title': 'Glasses',
            'x': 0.54,
            'y': 0.17
          },
          {
            'title': 'Shirt',
            'x': 0.34,
            'y': 0.6
          },
          {
            'title': 'Leggings',
            'x': 0.67,
            'y': 0.89
          }
        ]
      },
      {
        'title': 'Fall in the city',
        'user': 'Kirk.',
        'comments': '3 comments',
        'likes': '8',
        'time': '20 minutes ago',
        'caption': 'I love the city in the fall!',
        'img': 'http://3.bp.blogspot.com/-sYLw7YYED-M/TwvAWF11RXI/AAAAAAAAMX4/cHRPV1dRBWg/s640/Fashion-street-style-for-men.jpeg'
      },
      {
        'title': 'Summer drive',
        'user': 'Kendrick.',
        'comments': '4 comments',
        'likes': '19',
        'time': '28 minutes ago',
        'caption': 'Took the car out to the hills with a couple of friends. Thought this look\'d do!',
        'img': 'http://i.istockimg.com/file_thumbview_approve/19744739/2/stock-photo-19744739-male-fashion-model-sitting-in-classic-sports-car.jpg'
      },
      {
        'title': 'Spring dance',
        'user': 'Alisha.',
        'comments': '19 comments',
        'likes': '23',
        'time': '36 minutes ago',
        'caption': 'I really like the way it flows around me.',
        'img': 'http://1.bp.blogspot.com/-pgj7d3paCj0/UbjIwNN8x5I/AAAAAAAAsCI/5iK-Rr9PK-A/s1600/4307-Le-21eme-Adam-Katz-Sinding-Nadejda-Savcova-Mercedes-Benz-New-York-Fashion-Week-Spring-Summer-2013-2014_AKS1691-920x1382.jpg'
      },
      {
        'title': 'Afternoon stroll',
        'user': 'Timothy.',
        'comments': '20 comments',
        'likes': '30',
        'time': '45 minutes ago',
        'caption': 'I don\'t actually smoke!',
        'img': 'http://media.tumblr.com/82e4b7b81456b793adf0b0671bab3970/tumblr_inline_mrmxorYQSh1qz4rgp.jpg'
      },
      {
        'title': 'Fashion week',
        'user': 'Courtney.',
        'comments': '26 comments',
        'likes': '37',
        'time': '1 hour ago',
        'caption': 'Took a walk, and someone wanted to take my picture!',
        'img': 'http://blog.stylesight.com/wp-content/uploads/2013/02/New-York-Fashion-Week-Women-Portrait-Street-style-FW-13-20130211_0319.jpg'
      },
      {
        'title': 'Got a haircut',
        'user': 'Alex.',
        'comments': '15 comments',
        'likes': '80',
        'time': '1 hour ago',
        'caption': 'Just got a haircut. What do you think?',
        'img': 'http://www.gq.com/images/style/2012/02/nyfw/wandering-eye/wandering-eye-74.jpg'
      }
    ]
  };
  res.render('dashboard', posts);
};