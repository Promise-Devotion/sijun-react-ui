import classes, {scopedClassMaker} from '../classes';

describe("classes", () => {
  it("接受一个className", () => {
    const result = classes('class-a')
    expect(result).toEqual('class-a')
  });
  it("onCl接受两个classNameick", () => {
    const result = classes('class-a, class-b')
    expect(result).toEqual('class-a class-b')
  });
});


describe("scopedClassMaker", () => {
    it('接受 1 个className', () => {
        const result = classes('a')
        expect(result).toEqual('a')
    })
    it('接受 2 个className', () => {
        const result = classes('a', 'b')
        expect(result).toEqual('a b')
    })
    it('接受 undefined 结果不会出现 undefined', () => {
        const result = classes('a', 'b', undefined)
        expect(result).toEqual('a b')
    })
    it('接受 0 个参数', () => {
        const result = classes()
        expect(result).toEqual('')
    })
  });
  