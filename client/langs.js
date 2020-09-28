let langs = {};

langs.headersEn = ['Home', 'Practice Areas', 'Resources', 'Contact Info.'];

langs.headersSp = ['To Spanish', 'To Spanish', 'To Spanish', 'To Spanish'];

langs.practiceEn = ['For Entrepreneurs', 'Investor Tips/Training', 'Blog', 'Case Studies'];

langs.practiceSp = ['En Espanol', 'En Espanol', 'En Espanol', 'En Espanol'];

langs.resourcesEn = ['Resource 1', 'Resource 2', 'Resource 3', 'Resource 4'];

langs.resourcesSp = ['En Espanol', 'En Espanol', 'En Espanol', 'En Espanol'];

langs.introTitlesEn = [
  'Who We Are...',
  'What We Bring To The Table',
  "What We've Done"
];

langs.introTitlesSp = [
  'In Spanish',
  'In Spanish',
  'In Spanish'
];

langs.introParagraphEn = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor justo non scelerisque feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent et elit non lacus dictum suscipit vitae eget nunc. In sit amet pellentesque velit, eget ultricies nisi. Pellentesque nec efficitur quam, at sodales nunc. Duis convallis nisi in odio vehicula, at ornare eros aliquam. Nullam vestibulum quis elit vitae mollis. Integer nec erat augue.',
  'Duis metus massa, lacinia id porttitor sed, malesuada sed dui. Duis vehicula et ipsum ac venenatis. Nulla fermentum ipsum et metus ultricies, at volutpat dui blandit. Nulla ante purus, scelerisque a ipsum ac, tincidunt cursus dui. Praesent varius eleifend leo id venenatis. Donec lacinia maximus tellus id suscipit. Vivamus tincidunt neque nec velit elementum, in ornare quam rutrum. Vivamus dictum ipsum et mauris placerat placerat. Aliquam eu dui vulputate, congue nunc id, eleifend velit. Phasellus non cursus neque, porta rhoncus massa.',
  'Donec non ante mattis purus lacinia dignissim ut sit amet mi. Mauris aliquet purus ac elit scelerisque imperdiet. Mauris purus est, commodo ac lectus ut, iaculis fermentum nunc. Sed fermentum, velit pharetra commodo sagittis, libero mi eleifend tellus, eu porttitor orci urna id ante. Suspendisse et nisi a arcu bibendum maximus. Sed libero mi, gravida quis felis in, venenatis luctus nibh. Maecenas ut pretium purus. Sed sit amet justo lectus. Fusce lobortis dolor vel elit pulvinar, Etiam in pulvinar metus.'
];

langs.introParagraphSp = [
  'En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol.',
  'En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol.En Espanol En Espanol. En Espanol.',
  'En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol En Espanol.'
];

langs.formEn = [
  'Full Name', 'John Doe', 'Please include a single space', 'Please include a single space  ❌', 'Looks Good!  ✔️',
  'Email Adress', 'jdoe@example.com', "We'll never share your email with anyone else.", 'Please provide a valid email address  ❌', 'Looks Good!  ✔️',
  'Phone Number', '555-555-0199', 'Please provide a number greater than 10 digits', 'Please provide a number greater than 10 digits  ❌', 'Looks Good! ✔️',
  'Message', "What brings you to us?", 'Create a message greater than 15 characters, but less than 100', 'Create a message greater than 15 characters, but less than 100  ❌', 'Looks Good!  ✔️', 
  'Submit', 'Recieved' 
];
//update state when wrong input to use langs.formen/sp

langs.formSp = [
  'En Espanol', 'En Espanol', 'Looks Good!  ✔️', 'Looks Good!  ✔️', 'Looks Good!  ✔️',
  'En Espanol', 'En Espanol', 'Looks Good!  ✔️', 'Looks Good!  ✔️', 'Looks Good!  ✔️',
  'En Espanol', 'En Espanol', 'Looks Good!  ✔️', 'Looks Good!  ✔️', 'Looks Good!  ✔️',
  'En Espanol', 'En Espanol', 'Looks Good!  ✔️', 'Looks Good!  ✔️', 'Looks Good!  ✔️',
  'En Espanol', 'En Espanol'
];

langs.muteEn = [
  'Please include a single space', '❌  Please include a single space', '✔️  Looks Good!',
  "We'll NEVER share your email with anyone else.", '❌  Please provide a valid email address', '✔️  Looks Good!',
  'Only use spaces or dashes and provide a number greater than 10 digits', '❌  Only use spaces or dashes and provide a number greater than 10 digits', '✔️  Looks Good!',
  'Create a message greater than 15 characters, but less than 1000', '❌  Create a message greater than 15 characters, but less than 1000', '✔️  Looks Good!'
];

langs.muteSp = [
  'Looks Hood!  ✔️', 'Looks Wood!  ✔️', 'Looks Good!  ✔️',
  'Looks Hood!  ✔️', 'Looks Wood!  ✔️', 'Looks Good!  ✔️',
  'Looks Hood!  ✔️', 'Looks Wood!  ✔️', 'Looks Good!  ✔️',
  'Looks Hood!  ✔️', 'Looks Wood!  ✔️', 'Looks Good!  ✔️'
]

langs.border = ['', '3px solid #dc3545', '3px solid #28a745'];

langs.background = ['', 'hsl(1, 100%, 94%)', 'hsl(117, 100%, 94%)'];

langs.nameEn = ['Please include a single space  ❌', 'Looks Good!  ✔️'];

langs.nameSp = ['en Espanol  ❌', '¡Es verdad!  ✔️'];

langs.emailEn = ['Please provide a valid email address  ❌', 'Looks Good!  ✔️'];

langs.emailSp = ['en Espanol  ❌', '¡Es verdad!  ✔️'];

langs.numberEn = ['Please provide a number greater than 9 digits  ❌', 'Looks Good!  ✔️'];

langs.numberSp = ['en Espanol  ❌', '¡Es verdad!  ✔️'];

langs.messageEn = ['Create message greater than 15 characters and less than 1000  ❌', 'Looks good!  ✔️'];

langs.numberSp = ['en Espanol  ❌', '¡Es verdad!  ✔️'];

export default langs;