const initialState = {
  cycles: {
    'monthly': {
      unit: 'month',
      plans: {
        compact: {
          features: {
            hours: 20,
            turnaroundDays: [1,2],
            trainingHours: 2,
            benefit: "Great for small businesses",
            price: 700,
            other1: 'value'
          }
        },
        'mid-size': {
          features: {
            hours: 30,
            turnaroundDays: [1,2],
            trainingHours: 2,
            benefit: "Ideal for regular updates",
            price: 900,
            other1: 'value'
          }
        },
        deluxe: {
          features: {
            hours: 40,
            turnaroundDays: [1,2],
            trainingHours: 2,
            benefit: "Perfect for special projects",
            price: 1000,
            other2: 'value'
          }
        }
      },
      summary: `Better Value ${"\u2022"} Priority Service ${"\u2022"} Includes Extensions`
    },
    'pay-as-you-go': {
      unit: '',
      plans: {
        starter: {
          features: {
            hours: 2,
            turnaroundDays: 5,
            trainingHours: 0,
            benefit: "Everyday low price",
            price: 100
          }
        },
        basic: {
          features: {
            hours: 4,
            turnaroundDays: 3,
            trainingHours: 1,
            benefit: "17% Savings",
            price: 200
          }
        },
        plus: {
          features: {
            hours: 7,
            turnaroundDays: 2,
            trainingHours: 1,
            benefit: "28% Savings",
            price: 300
          }
        }
      },
      summary: `Just The Hours You Need ${"\u2022"} Top Up Any Time ${"\u2022"} No Expirations`
    }
  },
  featurable: [
    { 
      name: 'hours', 
      formatter: (value) => `Up to ${value} hours`,
      class: 'content-after-included'
    },
    {
      name: 'turnaroundDays',
      formatter: (value) => `${value.length ? value.join("-") : value} days`,
      class: 'content-after-turnaround'
    },
    {
      name: 'trainingHours',
      formatter: (value) => `${value} hours`,
      class: 'content-after-support'
    },
    {
      name: 'benefit', 
      formatter: (value) => `${value}`,
    },
    {
      name: 'price',
      formatter: (value, unit) => `$${value}${unit ? '/' + unit : ''}`,
      class: 'price'
    }
  ]
}

export default initialState;