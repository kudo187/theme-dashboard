<template>
  <div class="home">
    <div class="content">
        <div class="row">
            <div class="col-lg-6">
                <div class="card">
                    <div class="card-header text-uppercase bg-info text-white">
                        Chiếc khấu đổi thẻ
                    </div>
                    <div class="card-body">
                        <table class="table table-bordered ">
                            <thead class="thead-dark">
                                <tr>
                                    <th>Loại thẻ</th>
                                    <th>Chiếc khấu</th>
                                    <th>Tình trạng</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(card, index) in cards" v-bind:key="index">
                                    <td>{{ card.name }}</td>
                                    <td>{{ card.discount }}%</td>
                                    <td class="bg-success text-white" :class=" card.status ? 'bg-success' : 'bg-danger'">{{ card.status ? "Hoạt động" : "Ngừng" }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="card">
                    <div class="card-header bg-warning text-white text-uppercase ">
                        Đổi thẻ cào thành Gold
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="form-group">
                                <select class="form-control form-control-md" v-model="selected.type" v-on:change="loadPrice(selected.type)">
                                    <option value="">--Chọn loại thẻ--</option>
                                    <option v-for="(card, index) in cards" v-bind:key="index" :value="card.type">{{ card.name }} {{ !card.status ? '(Ngừng giao dịch)' : '' }}</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <select class="form-control form-control-md" v-model="selected.price">
                                    <option value="">--Chọn mệnh giá--</option>
                                    <option v-for="(card, index) in selected.card_price" v-bind:key="index" :value="card.price">{{ formatPrice(card.price) }} {{ !card.status ? '(Ngừng giao dịch)' : '' }}</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="seri" placeholder="Seri">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="id-card" placeholder="Mã thẻ">
                            </div>
                            <div class="form-group text-center">
                                <button class="btn btn-warning">Nạp thẻ</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
  data () {
    return {
      selected: {
        type: '',
        price: '',
        card_price: []
      },
      cards: []
    }
  },
  methods: {
    getCards () {
      var getCardsPromise = new Promise((resolve, reject) => {
        axios({
          method: 'get',
          url: '/cards'
        }).then(function (response) {
          console.log(response)
          if (response.data.data) {
            resolve(response.data.data)
          } else {
            reject(response.data.message)
          }
        }).catch(function (error) {
          reject(error.response.data.message)
        })
      })

      getCardsPromise.then(value => {
        console.log('card_info', value)
        this.cards = value
      })

      getCardsPromise.catch(reason => {
      })
    },
    loadPrice (type) {
      for (let i = 0; i < this.cards.length; i++) {
        if (this.cards[i].type === type) {
          this.selected.card_price = this.cards[i].card.sort(function (a, b) {
            if (isNaN(a) || isNaN(b)) {
              return a > b ? 1 : -1
            }
            return a - b
          })
        }
      }
    },
    formatPrice (value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  },
  mounted () {
    this.getCards()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
