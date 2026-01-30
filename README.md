# Invoice Calculator

A simple, lightweight calculator for freelancers and contractors to calculate invoice amounts based on monthly rates and time worked.

## Overview

This tool helps you quickly calculate how much to invoice based on your monthly rate and the actual time worked in a given month. It automatically calculates workdays (Monday–Friday) for any month and provides two calculation methods.

## Calculation Methods

### Time Off Mode

Calculate your invoice by subtracting days you didn't work from the total workdays.

**Formula:**
```
worked_days = workdays_in_month - time_off_days
invoice_amount = (monthly_rate / workdays_in_month) × worked_days
```

**Example:** If your monthly rate is $10,000 and the month has 22 workdays, taking 2 days off:
- Worked days: 22 - 2 = 20
- Daily rate: $10,000 / 22 = $454.55
- Invoice: $454.55 × 20 = **$9,090.91**

### Worked Days Mode

Calculate your invoice by directly entering the number of days you worked.

**Formula:**
```
invoice_amount = (monthly_rate / workdays_in_month) × worked_days
```

**Example:** If your monthly rate is $10,000 and the month has 22 workdays, working 18 days:
- Daily rate: $10,000 / 22 = $454.55
- Invoice: $454.55 × 18 = **$8,181.82**

## Features

- **Automatic workday calculation**: Counts only weekdays (Monday–Friday) for any month
- **Two calculation modes**: Choose between time off or worked days
- **Real-time calculation**: Results update instantly as you type

## Usage

1. Enter your monthly rate
2. Select the month
3. Choose your preferred calculation method:
   - **Time off**: Enter how many days you took off
   - **Worked days**: Enter how many days you worked
4. The invoice amount is calculated automatically

## Development

Built with vanilla JavaScript and Vite for fast, modern development.

### Setup

```bash
pnpm install
```

### Development Server

```bash
pnpm dev
```

### Build

```bash
pnpm build
```

The production-ready files will be generated in the `dist/` directory.

## License

MIT
