import { sum} from '../src/components/sum';

test("This Function should calculate the sum of two numbers" , ()=>{
    const result = sum(2,3);

    // This is Assertion 
    expect(result).toBe(5);
})

test("This Function should calculate the sum of two negative numbers" , ()=>{
    const result = sum(-2,-3);
    expect(result).toBe(-5);

    // This is Assertion 
    expect(result).toBe(-5);
})