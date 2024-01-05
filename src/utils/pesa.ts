import { getMoneyMaker } from 'pesa';

export const pesa = getMoneyMaker({
  currency: 'INR',
  precision: 2,
  bankersRounding: true
});

export function isNegative(value: string | number | null | undefined): boolean {
  return pesa(value || 0).isNegative();
}

export function parseFloat(value: string | number | null | undefined): number {
  try {
    return pesa(value || 0).float;
  } catch {
    return 0;
  }
}

export function parsePositive(value: string | number): number {
  try {
    if (pesa(value).isNegative()) {
      return 0;
    }
    return pesa(value).float;
  } catch {
    return 0;
  }
}

export function add(...[augend, addend]: [number, number]) {
  try {
    return pesa(augend).add(pesa(addend)).float;
  } catch {
    return 0;
  }
}

export function sub(...[minuend, subtrahend]: [number, number]) {
  try {
    return pesa(minuend).sub(pesa(subtrahend)).float;
  } catch {
    return 0;
  }
}

export function multiply(...[multiplicand, multiplier]: [number, number]) {
  try {
    return pesa(multiplicand).mul(multiplier).float;
  } catch {
    return 0;
  }
}

export function divide(...[dividend, divisor]: [number, number]) {
  try {
    return pesa(dividend).div(divisor).float;
  } catch {
    return 0;
  }
}

export function percent(...args: [number, number]) {
  try {
    return pesa(args[0]).percent(args[1]).float;
  } catch {
    return 0;
  }
}

export function split(...args: [number, number]) {
  try {
    return pesa(args[0]).split(args[1], 2).map((m) => m.float);
  } catch {
    return 0;
  }
}

export function splitEqual(...args: [number, number]) {
  const values: number[] = [];
  const quotient = divide(args[0], args[1]);
  for (let index = 1; index <= args[1]; index++) {
    if (index === args[1]) {
      values.push(sub(args[0], multiply(quotient, args[1] - 1)));
    } else {
      values.push(quotient);
    }
  }
  return values;
}

export function round(...args: [number]) {
  try {
    return pesa(args[0]).round(2);
  } catch {
    return 0;
  }
}