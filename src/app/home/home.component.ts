import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  timeline: any[];
  contractAddress = '0x25803e4bda29f54008caf951e240de19cd63b84b';
  bscscanWebsite = 'https://bscscan.com/token/';
  pancakeWebsite = 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=';
  bscscanToken = this.bscscanWebsite + this.contractAddress;
  pancakeToken = this.pancakeWebsite + this.contractAddress;

  ngOnInit() {
    this.timeline = [
      {
        date: '19/05/2021 22:30',
        content: 'Creation & Launch of Treesure Token on Binance Smart Chain',
        color: '#388e3c',
      },
      {
        date: '02/06/2021 16:00',
        content: 'Website Design and Planning',
        color: '#FF9800',
      },
      {
        date: '15/10/2020 16:15',
        content: 'Conception of the Logo',
        color: '#fc0303',
      },
      {
        date: '16/10/2020 10:00',
        content: 'Launch NFT Project',
        color: '#fc0303',
      },
      {
        date: '16/10/2020 10:00',
        content: 'Listed on CoinGecko',
        color: '#fc0303',
      },
    ];
  }

  pooCoinWebsite() {
    window.open(
      'https://poocoin.app/tokens/0x25803e4bda29f54008caf951e240de19cd63b84b'
    );
  }
}
