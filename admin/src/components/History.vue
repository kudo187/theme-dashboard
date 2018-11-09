<template>
  <div class='history pending'>
    <ul class='nav nav-pills nav-justified pills-rounded '>
      <li class='nav-item'>
        <a class='nav-link active font-weight-bold text-uppercase' data-toggle='tab' href='#chargingCard' role='tab'>nạp
          thẻ</a>
      </li>
      <li class='nav-item'>
        <a class='nav-link font-weight-bold text-uppercase' data-toggle='tab' href='#panelSendMoney' role='tab'>chuyển
          tiền</a>
      </li>
      <li class='nav-item'>
        <a class='nav-link font-weight-bold text-uppercase' data-toggle='tab' href='#panelWithdrawl' role='tab'>rút
          tiền về n.hàng</a>
      </li>
      <li class='nav-item'>
        <a class='nav-link font-weight-bold text-uppercase' data-toggle='tab' href='#panelGiveMoney' role='tab'>nhận
          tiền</a>
      </li>
    </ul>
    <!-- Tab panels -->
    <div class='tab-content pt-0'>
      <!--Panel 1-->
      <div class='tab-pane fade in show active' id='chargingCard' role='tabpanel'>
        <br>
        <div class='col-lg'>
          <div class='card'>
            <vue-good-table
                    :columns='columnCharging'
                    :rows='rowsCharging'
                    :pagination-options="{
                  enabled: true,
                  perPageDropdown: [5,10,15,20,30,50,100],
                  rowsPerPageLabel: 'Hiện',
                  nextLabel: 'Trước',
                  prevLabel: 'Sau',
                }"
                    :search-options="{
                  enabled: true,
                  skipDiacritics: true,
                  placeholder: 'Tìm kiếm lịch sử thẻ cào.',
                }"
                    :sort-options="{
                  enabled: true,
                  initialSortBy: {field: 'time_charging', type: 'desc'}
                }"
            >
              <div slot="emptystate">Không tìm thấy dữ liệu</div>
            </vue-good-table>
          </div>
        </div>
      </div>
      <!--/.Panel 1-->
      <!--Panel 2-->
      <div class='tab-pane fade' id='panelSendMoney' role='tabpanel'>
        <br>
        <div class='col-lg'>
          <div class='card'>
            <vue-good-table
                    :columns='columnTranfers'
                    :rows='rowsTranfers'
                    :pagination-options="{
                  enabled: true,
                  perPageDropdown: [5,10,15,20,30,50,100],
                  rowsPerPageLabel: 'Hiện',
                  nextLabel: 'Trước',
                  prevLabel: 'Sau',
                }"
                    :search-options="{
                  enabled: true,
                  skipDiacritics: true,
                  placeholder: 'Tìm kiếm lịch sử chuyển tiền.',
                }"
                    :sort-options="{
                  enabled: true,
                  initialSortBy: {field: 'time_charging', type: 'desc'}
                }"
            >
              <div slot="emptystate">Không tìm thấy dữ liệu</div>
            </vue-good-table>
          </div>
        </div>
      </div>
      <!--/.Panel 2-->
      <!--Panel 3-->
      <div class='tab-pane fade' id='panelWithdrawl' role='tabpanel'>
        <br>
        <div class='col-lg'>
          <div class='card'>
            <vue-good-table
                    :columns='columnWithdrawalBank'
                    :rows='rowWithdrawalBank'
                    :pagination-options="{
                  enabled: true,
                  perPageDropdown: [5,10,15,20,30,50,100],
                  rowsPerPageLabel: 'Hiện',
                  nextLabel: 'Trước',
                  prevLabel: 'Sau',
                }"
                    :search-options="{
                  enabled: true,
                  skipDiacritics: true,
                  placeholder: 'Tìm kiếm lịch sử rút tiền.',
                }"
                    :sort-options="{
                  enabled: true,
                  initialSortBy: {field: 'time_charging', type: 'desc'}
                }"
            >
              <div slot="emptystate">Không tìm thấy dữ liệu</div>
            </vue-good-table>
          </div>
        </div>
      </div>
      <!--/.Panel 3-->
      <!--Panel 2-->
      <div class='tab-pane fade' id='panelGiveMoney' role='tabpanel'>
        <br>
        <div class='col-lg'>
          <div class='card'>
            <vue-good-table
                    :columns='columnReceiveMoney'
                    :rows='rowsReceiveMoney'
                    :pagination-options="{
                  enabled: true,
                  perPageDropdown: [5,10,15,20,30,50,100],
                  rowsPerPageLabel: 'Hiện',
                  nextLabel: 'Trước',
                  prevLabel: 'Sau',
                }"
                    :search-options="{
                  enabled: true,
                  skipDiacritics: true,
                  placeholder: 'Tìm kiếm lịch sử nhận tiền.',
                }"
                    :sort-options="{
                  enabled: true,
                  initialSortBy: {field: 'time_charging', type: 'desc'}
                }"
            >
              <div slot="emptystate">Không tìm thấy dữ liệu</div>
            </vue-good-table>
          </div>
        </div>
      </div>
      <!--/.Panel 4-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'history',
  middleware: 'auth',
  data () {
    return {
      columnCharging: [
        {
          label: 'T.Gian nạp',
          field: 'time_charging',
          type: 'date',
          dateInputFormat: 'YYYY-MM-DD',
          dateOutputFormat: 'MMM Do YY',
          tdClass: 'text-center'
        },
        {
          label: 'Trạng thái',
          field: 'status',
          type: 'number',
          formatFn: this.formatFn,
          tdClass: this.tdClassFunc
        },
        {
          label: 'Loại thẻ',
          field: 'type_card',
          tdClass: 'text-center'
        },
        {
          label: 'Mệnh giá',
          field: 'denominations',
          tdClass: 'text-center'
        },
        {
          label: 'Số Seri',
          field: 'seri_number',
          tdClass: 'text-center'
        },
        {
          label: 'Mã thẻ',
          field: 'number_card',
          tdClass: 'text-center'
        }
        // {
        //   label: 'Percent',
        //   field: 'score',
        //   type: 'percentage', %
        // },
      ],
      rowsCharging: [
        { id: 1, time_charging: '2011-10-31', status: 1, type_card: 'Viettel', denominations: '50.000', seri_number: '12347851819238918', number_card: '41894178917187189' },
        { id: 2, time_charging: '2015-03-20', status: 0, type_card: 'Mobiphone', denominations: '100.000', seri_number: '', number_card: '' },
        { id: 3, time_charging: '2017-10-03', status: 1, type_card: 'Viettel', denominations: '20.000', seri_number: '0856763522341121', number_card: '14643634343455353' }
      ],
      columnTranfers: [
        {
          label: 'Thời gian',
          field: 'time',
          type: 'date',
          dateInputFormat: 'YYYY-MM-DD',
          dateOutputFormat: 'YYYY-MM-DD',
          tdClass: 'text-center'
        },
        {
          label: 'Người nhận',
          field: 'receiver'
        },
        {
          label: 'Số tiền',
          field: 'amount',
          tdClass: 'text-center'
        },
        {
          label: 'Nội dung',
          field: 'content',
          tdClass: 'text-center'
        }
        // {
        //   label: 'Percent',
        //   field: 'score',
        //   type: 'percentage', %
        // },
      ],
      rowsTranfers: [
        { id: 1, time: '2011-10-31', receiver: 'Nguyễn Văn A', amount: '100.000.000.000', content: 'Tiền nhiều quá không biết làm gì nên gửi cho chú xài bớt.' },
        { id: 2, time: '2015-03-20', receiver: 'Đỗ Thanh Phong', amount: '2.000.000.000.000', content: 'Ăn chơi xả láng đi @@.' },
        { id: 3, time: '2017-10-03', receiver: 'Nguyễn Văn Sáu', amount: '500.000.000.000', content: 'Tiền lấy vợ' }
      ],
      columnReceiveMoney: [
        {
          label: 'Thời gian',
          field: 'time',
          type: 'date',
          dateInputFormat: 'YYYY-MM-DD',
          dateOutputFormat: 'YYYY-MM-DD',
          tdClass: 'text-center'
        },
        {
          label: 'Người gửi',
          field: 'sender'
        },
        {
          label: 'Số tiền',
          field: 'amount',
          tdClass: 'text-center'
        },
        {
          label: 'Nội dung',
          field: 'content',
          tdClass: 'text-center'
        }
        // {
        //   label: 'Percent',
        //   field: 'score',
        //   type: 'percentage', %
        // },
      ],
      rowsReceiveMoney: [
        { id: 1, time: '2011-10-31', sender: 'Nguyễn Văn Khoa', amount: '100.000.000', content: 'Chuyển tiền mua nhà' },
        { id: 2, time: '2015-03-20', sender: 'Đỗ Thanh Phong', amount: '200.000', content: 'Tiền ăn cưới' },
        { id: 3, time: '2017-10-03', sender: 'Nguyễn Văn Sáu', amount: '500.000', content: 'Tiền lấy vợ' }
      ],
      columnWithdrawalBank: [
        {
          label: 'T.Gian rút',
          field: 'time_withdrawal',
          type: 'date',
          dateInputFormat: 'YYYY-MM-DD',
          dateOutputFormat: 'MMM Do YY',
          tdClass: 'text-center'
        },
        {
          label: 'Trạng thái',
          field: 'status',
          type: 'number',
          formatFn: this.formatFn,
          tdClass: this.tdClassFunc
        },
        {
          label: 'Số tiền',
          field: 'amount',
          tdClass: 'text-center'
        },
        {
          label: 'Tên TK',
          field: 'name_acount',
          tdClass: 'text-center'
        },
        {
          label: 'Số TK',
          field: 'number_account',
          tdClass: 'text-center'
        },
        {
          label: 'Ngân hàng',
          field: 'name_bank',
          tdClass: 'text-center'
        },
        {
          label: 'Chi nhánh',
          field: 'bank_branch',
          tdClass: 'text-center'
        },
        {
          label: 'Tin nhắn',
          field: 'messages',
          tdClass: 'text-center'
        }
        // {
        //   label: 'Percent',
        //   field: 'score',
        //   type: 'percentage', %
        // },
      ],
      rowWithdrawalBank: [
        { id: 1, time_withdrawal: '2011-10-31', status: 1, amount: '1.000.000', name_acount: 'Nguyễn Văn Khoa', number_account: '2080202323', name_bank: 'TP-Bank', bank_branch: 'Cộng Hòa, Tân Bình', messages: '' }
      ]
    }
  },
  methods: {
    formatFn: function (value) {
      if (value === 1) {
        return 'Thành công'
      }
      return 'Đang duyệt'
    },
    tdClassFunc (row) {
      if (row.status === 1) {
        return 'bg-success text-white text-center'
      }
      return 'bg-danger text-white text-center'
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
</style>
