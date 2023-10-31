export type Features = {
  Output: {
    'Monthly Work Capacity': string;
    'Requests & Revisions': string;
    'Avg. Turnaround Time': string;
  };
  Design: {
    'AI Assisted Design': boolean;
    'UI/UX Design': boolean;
    'Graphic Design': boolean;
    '3D Design': boolean;
    'Copywriting': boolean;
  };
  Development: {
    Database: boolean;
    'Mobile Design': boolean;
    'Admin Page': boolean;
    'Online Payment': boolean;
    'SEO': boolean;
  };
  Hosting: {
    'Live Server': boolean;
    'Server Maintenance': string;
    'Dedicated Storage': string;
    Uptime: string;
  };
  Integration: {
    'Yearly Meetings': string; // "Up to ..."
    'LORC Maintenance': boolean;
    'Project Board': boolean;
  };
};

// Probably better object oriented way to do this, but sometimes fast is better.
export const features = {
  Output: {
    'Monthly Work Capacity': `The guaranteed number of work hours available to you each month. 
		If your usage exceeds this limit, any remaining Requests will be carried over to the following month.`,
    'Requests & Revisions': `A Request is a task to create something (an illustration, a page, etc.). A Revision is a task to update something already existing.`,
    'Avg. Turnaround Time': `The Average Turnaround Time reflects the typical duration
		 between the submission and completion of a Request. Please note that this time may 
		 vary depending on Request complexity and current workload.`,
  },
  Design: {
    'AI Assisted Design':
      'Our inhouse AI Assisted Design workflow and cutting-edge technologies empower our design team to create outstanding visuals and concepts.',
    'UI/UX Design':
      'Crafting seamless and aesthetically pleasing user experiences that enhance the overall appeal and functionality of your website.',
    'Graphic Design':
      'Creating eye-catching visual elements, logos, and graphics that make your website stand out.',
    '3D Design':
      'Incorporate stunning three-dimensional elements into your projects, adding depth and sophistication.',
    'Copywriting':
      "Persuasive copywriting to elevate your brand's message and captivate your audience."
  },
  Development: {
    Database: 'Data management, retrievals, and submissions for your website or application.',
    'Mobile Design':
      'Ensures your website looks and functions flawlessly across various devices and screen sizes.',
    'Admin Page':
      'A password protected page that allows you to easily update content and monitor performance.',
    'Online Payment':
      'Integrate a payment gateway on your website and configure it for your business.',
    'SEO':
      'The process of improving your website to increase its visibility in search engines like Google.'
  },
  Hosting: {
    'Live Server': 'Your website is hosted on a server with live updates.',
    'Server Maintenance':
      'We handle routine server updates, security patches, and performance optimization to keep your site running smoothly.',
    'Dedicated Storage':
      'Dedicated storage on the server to accommodate your data and content, ensuring fast loading times and smooth performance.',
    Uptime: 'Percentage of time that your website is live and accessible to users.',
  },
  Integration: {
    'Yearly Meetings':
      'Yearly meetings to discuss your evolving needs, goals, and strategies for improvement.',
    'LORC Maintenance':
      'Our Library of Reusable Components to speed up development and ensure consistency.',
    'Project Board': `Software to easily submit Requests or Revisions and where you can view the team's progress on your project.`,
  },
};

export type NorpTier = {
  stripeIds: {
    monthly: string;
    yearly: string;
  };

  index: number;
  name: string;
  subtitle: string;
  cost: number;
  features: Features;
  thumbnail: string;
};

export const norpTiers: NorpTier[] = [
  {
    stripeIds: {
      monthly: 'price_1NoN1nD09EWpqQ4YyjtILNRI',
      yearly: 'price_1NoN1nD09EWpqQ4YUqInAOrP',
    },
    index: 0,
    name: 'Cruising',
    subtitle: 'Keep it going.',
    cost: 179,
    features: {
      Output: {
        'Monthly Work Capacity': '2 hours',
        'Requests & Revisions': 'ထ',
        'Avg. Turnaround Time': '3 days',
      },
      Design: {
        'AI Assisted Design': true,
        'UI/UX Design': true,
        'Graphic Design': true,
        '3D Design': true,
        'Copywriting': true,
      },
      Development: {
        Database: true,
        'Mobile Design': true,
        'Admin Page': true,
        'Online Payment': true,
        'SEO': true,
      },
      Hosting: {
        'Live Server': true,
        'Dedicated Storage': '10 GB',
        Uptime: '99.5%',
        'Server Maintenance': 'Monthly',
      },
      Integration: {
        'Yearly Meetings': 'Up to 1',
        'LORC Maintenance': true,
        'Project Board': true,
      },
    },
    thumbnail: '/artwork/sailboat_2.png',
  },
  {
    stripeIds: {
      monthly: 'price_1NoN66D09EWpqQ4YOSJyrCzK',
      yearly: 'price_1NoN66D09EWpqQ4YMqt6lYEe',
    },
    index: 1,
    name: 'Expanding',
    subtitle: 'Even the playing field.',
    cost: 1450,
    features: {
      Output: {
        'Monthly Work Capacity': '9 hours',
        'Requests & Revisions': 'ထ',
        'Avg. Turnaround Time': '2 days',
      },
      Design: {
        'AI Assisted Design': true,
        'UI/UX Design': true,
        'Graphic Design': true,
        '3D Design': true,
        'Copywriting': true,
      },
      Development: {
        Database: true,
        'Mobile Design': true,
        'Admin Page': true,
        'Online Payment': true,
        'SEO': true,
      },
      Hosting: {
        'Live Server': true,
        'Dedicated Storage': '20 GB',
        Uptime: '99.8%',
        'Server Maintenance': 'Biweekly',
      },
      Integration: {
        'Yearly Meetings': 'Up to 12',
        'LORC Maintenance': true,
        'Project Board': true,
      },
    },
    thumbnail: '/artwork/plane_2.png',
  },
  {
    stripeIds: {
      monthly: 'price_1NoNACD09EWpqQ4YJZn1InAc',
      yearly: 'price_1NoNACD09EWpqQ4YINnuTYRw',
    },
    index: 2,
    name: 'Blazing',
    subtitle: 'Make it unfair.',
    cost: 5600,
    features: {
      Output: {
        'Monthly Work Capacity': '36 hours',
        'Requests & Revisions': 'ထ',
        'Avg. Turnaround Time': '2 days',
      },
      Design: {
        'AI Assisted Design': true,
        'UI/UX Design': true,
        'Graphic Design': true,
        '3D Design': true,
        'Copywriting': true,
      },
      Development: {
        Database: true,
        'Mobile Design': true,
        'Admin Page': true,
        'Online Payment': true,
        'SEO': true,

      },
      Hosting: {
        'Live Server': true,
        'Dedicated Storage': '30 GB',
        Uptime: '99.9%',
        'Server Maintenance': 'Weekly',
      },
      Integration: {
        'Yearly Meetings': 'Up to 24',
        'LORC Maintenance': true,
        'Project Board': true,
      },
    },
    thumbnail: '/artwork/rocket_6.png',
  },
];

export const promotions: { label: string; index: number; for: string; discount: string }[] = [
  { label: 'Monthly', index: 0, for: 'monthly', discount: '' },
  { label: 'Anually', index: 1, for: 'anually', discount: '2 Months free' },
];
