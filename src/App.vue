<template>
  <div id="app">
    <main>
      <article class="article">
        <h1>Intel 8086</h1>
        <section>
          Intel 8086[1]（亦称之为iAPX 86）[2]是由英特尔公司于1976年初开始设计，1978年年中发表的Intel第一款16位微处理器。随后于1979年，又推出了Intel 8088，它在芯片的外部连接椎使用8位数据总线（允许使用更廉价和更少集成电路[note 1]）的支持，成为8086的一个低成本的简化产品，并用在IBM PC的原始设计中的处理器（包括广为人所知的IBM PC XT）中而被人知晓。
8086是Intel最成功的处理器系列x86架构的开端。
        </section>
        <section id="selection-1">
          <h2>JavaScript 在浏览器中是怎么跑起来的？</h2>
          <p>1972年，Intel发布了8008微处理器——世界上第一款8位微处理器。[note 2] 8008微处理器有18个引脚，其中地址总线使用了14个引脚，并且与8位数据总线复用引脚。指令集源自是Datapoint公司为计算机的CRT-键盘终端设计的但相当通用的指令集。当时英特尔还是一家生产DRAM为主业的公司，缺乏这方面的技术储备。</p>
          <p>1974年，Intel发布了8080微处理器，[note 3] 被公认是第一款真正可用的微处理器。8080的芯片封装采用40个引脚，其中8个数据总线引脚、16个地址总线引脚都是专用的，因此数据总线与地址总线可以并行工作。8080的扩展后的指令集在源代码级别上向前兼容8008指令集。</p>
          <p>1975年，Intel发布了第三款8位微处理器——8085。采用了新的制造工艺，简化了输入电压引脚的数量。同一时期还有Motorola 6800（1974）、Microchip PIC16X（1975）、MOS Technology 6502（1975）、Zilog Z80（1976）及Motorola 6809（1978）等8位微处理器。在8位微处理器市场竞争中Z80最为成功。</p>
        </section>
        <section id="selection-2">
          <h2>第一种x86设计</h2>
          <p>8086项目起始于1976年5月，是英特尔公司当时更为看重的16位的iAPX 432微处理器的备份项目。8086一方面要与Motorola, Zilog, National Semiconductor等公司的16位、32位微处理器竞争市场份额，另一方面也是对Zilog Z80在8位微处理器市场上的成功的回击。由于采用了与8085微处理器近似的微体系结构与物理实现工艺，8086项目进展相当快。</p>
          <p>8086微处理器被设计为在汇编源程序上向前兼容8008, 8080, 8085等微处理器。指令集与编程模式是基于8080微处理器，但指令集做了扩展以完全支持16位计算。</p>
          <p>新增加的指令包括：完全支持有符号整数、段基址+偏移量寻址、类似于Z80的[3]自重复操作、直接支持嵌套的ALGOL类语言如Pascal或PL/M、微码实现的乘法除法指令、以及更好支持与协处理器（8087或8089）和多处理器系统的总线结构.</p>
          <p>第一版的指令集与高层的体系结构的设计仅用了3个月。[note 4] 在没有CAD工具的时代，4名工程师与12名布线绘图员平行工作，[note 5] 用了2年多的时间才把8086的高层设计实现为可运行测试的产品。这在当时算是很快的研发速度。</p>
          <p>8086是随机逻辑[4]与微码的混合实现[note 6]，使用了大约20,000个晶体管（算上所有的ROM与可编程逻辑阵列为29,000个晶体管）。芯片面积为33 mm²，制造工艺为3.2 μm.</p>
          <p>8086体系结构由Stephen P. Morse设计，并在最后定案时得到Bruce Ravenel（8087体系结构设计者）的帮助。逻辑设计者是以Jim McKevitt与John Bayliss为首的硬件开发工程师团队[note 7]。项目经理William Pohlman。迄今8086的指令集仍然是PC机与服务器的基本指令集。</p>
        </section>
        <section id="selection-3">
          <h2>总线与操作</h2>
          <p>所有的内部寄存器、内部及外部数据总线都是16位宽，因此是完全的16位微处理器。20位外部地址总线，因此物理定址空间为1MiB (即220 = 1,048,576).由于内部寄存器都是16位，对1M地址空间寻址时采取了段寻址方式。8086的封装采用40引脚的双列直插（dual in-line），数据总线与地址总线复用了前16个引脚。16位的I/O地址，因此独立的I/O寻址空间为64KiB的虚拟定址空间 (即216 = 65,536).由于8086内部的地址寄存器是16 位宽，因而最大线性寻址空间为64 KiB.使用超过64 KiB内存空间的程序设计时，需要调整段寄存器（segment registers）。直到32位的80386出现之前，8086的这种段寻址相当不便.</p>
          <p>8086芯片封装的8个控制引脚在min或max下有不同功能。"min"模式是使用单处理器的小型计算机系统，"max"模式是使用多处理器的中到大型计算机系统。</p>
        </section>
      </article>
      <aside>
        <scroll-spy :items="['#selection-1', '#selection-2', '#selection-3']" class="scroll-spy" tag="ul" current-class="active-class">
          <li>JavaScript 在浏览器中是怎么跑起来的？</li>
          <li>第一种x86设计</li>
          <li>总线与操作</li>
        </scroll-spy>
      </aside>
    </main>
  </div>
</template>
<script>
import ScrollSpy from "@/components/scrollspy";
export default {
  name: 'App',
  components: { ScrollSpy }
}
</script>
<style>
html, body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 16px;
}
body {
  background-color: #f4f5f5;
}

main {
  display: flex;
  margin: 1rem auto;
  position: relative;
  width: 1300px;
  max-width: 100%;
  border-radius: 2px;
  box-sizing: border-box;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
}

aside {
  width: 400px;
  flex: 0 1 400px;
}
.article {
  background-color: #fff;
  padding: 1rem 2rem;
  margin-right: .5rem;
  box-sizing: border-box;
}
.scroll-spy {
  position: fixed;
  top: 1rem;
  /* width: 400px; */
  box-sizing: border-box;
  background-color: #fff;
  padding: 2rem;
  margin: 0;
}
.active-class {
  font-weight: 700
}
</style>
