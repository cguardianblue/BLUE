export const paginationProps = {
  total: Number,
  pageSize: Number,
  defaultPageSize: Number,
  currentPage: Number,
  defaultCurrentPage: Number,
  pagerCount: {
    type: Number,
    // validator: value => {
    //   return typeof value === 'number' && Math.trunc(value) === value && value > 4 && value < 22 && value % 2 === 1
    // },
    default: 7,
  },
  layout: {
    type: String,
    // default: (
    //   ['prev', 'pager', 'next', 'jumper', 'total']
    // ).join(', '),
    default: ["pager"].join(", "),
  },
  pageSizes: {
    type: Array,
    default: () => {
      return [10, 20, 30, 40, 50, 100]
    },
  },
  small: Boolean,
  background: Boolean,
  disabled: Boolean,
  hideOnSinglePage: Boolean,
}
export const cgPaginationKey = Symbol("cgPaginationKey")
