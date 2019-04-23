<template>
  <div id="app">
    <main>
      <article class="article">
        <section id="selection-1">
          <h1>Intel 8086</h1>
          <p>The 8086 (also called iAPX 86 ) is a 16-bit microprocessor chip designed by Intel between early 1976 and June 8, 1978, when it was released. The Intel 8088, released July 1, 1979, is a slightly modified chip with an external 8-bit data bus (allowing the use of cheaper and fewer supporting ICs), and is notable as the processor used in the original IBM PC design, including the widespread version called IBM PC XT.</p>
          <p>The 8086 gave rise to the x86 architecture, which eventually became Intel's most successful line of processors. On June 5, 2018, Intel released a limited edition CPU celebrating the anniversary of the Intel 8086, called the Intel Core i7-8086K.</p>
        </section>
        <section id="selection-2">
          <h1>History</h1>
          <p>In 1972, Intel launched the 8008, the first 8-bit microprocessor. It implemented an instruction set designed by Datapoint corporation with programmable CRT terminals in mind, which also proved to be fairly general-purpose. The device needed several additional ICs to produce a functional computer, in part due to it being packaged in a small 18-pin "memory package", which ruled out the use of a separate address bus (Intel was primarily a DRAM manufacturer at the time).</p>
          <p>Two years later, Intel launched the 8080, employing the new 40-pin DIL packages originally developed for calculator ICs to enable a separate address bus. It has an extended instruction set that is source-compatible (not binary compatible) with the 8008 and also includes some 16-bit instructions to make programming easier. The 8080 device, was eventually replaced by the depletion-load-based 8085 (1977), which sufficed with a single +5 V power supply instead of the three different operating voltages of earlier chips. Other well known 8-bit microprocessors that emerged during these years are Motorola 6800 (1974), General Instrument PIC16X (1975), MOS Technology 6502 (1975), Zilog Z80 (1976), and Motorola 6809 (1978).</p>
        </section>
        <section id="selection-3">
          <h1>The first x86 design</h1>
          <p>The 8086 project started in May 1976 and was originally intended as a temporary substitute for the ambitious and delayed iAPX 432 project. It was an attempt to draw attention from the less-delayed 16- and 32-bit processors of other manufacturers (such as Motorola, Zilog, and National Semiconductor) and at the same time to counter the threat from the Zilog Z80 (designed by former Intel employees), which became very successful. Both the architecture and the physical chip were therefore developed rather quickly by a small group of people, and using the same basic microarchitecture elements and physical implementation techniques as employed for the slightly older 8085 (and for which the 8086 also would function as a continuation).</p>
          <p>Marketed as source compatible, the 8086 was designed to allow assembly language for the 8008, 8080, or 8085 to be automatically converted into equivalent (suboptimal) 8086 source code, with little or no hand-editing. The programming model and instruction set is (loosely) based on the 8080 in order to make this possible. However, the 8086 design was expanded to support full 16-bit processing, instead of the fairly limited 16-bit capabilities of the 8080 and 8085.</p>
          <p>New kinds of instructions were added as well; full support for signed integers, base+offset addressing, and self-repeating operations were akin to the Z80 design but were all made slightly more general in the 8086. Instructions directly supporting nested ALGOL-family languages such as Pascal and PL/M were also added. According to principal architect Stephen P. Morse, this was a result of a more software-centric approach than in the design of earlier Intel processors (the designers had experience working with compiler implementations). Other enhancements included microcoded multiply and divide instructions and a bus structure better adapted to future coprocessors (such as 8087 and 8089) and multiprocessor systems.</p>
          <p>The first revision of the instruction set and high level architecture was ready after about three months, and as almost no CAD tools were used, four engineers and 12 layout people were simultaneously working on the chip. The 8086 took a little more than two years from idea to working product, which was considered rather fast for a complex design in 1976–1978.</p>
          <p>The 8086 was sequenced using a mixture of random logic and microcode and was implemented using depletion-load nMOS circuitry with approximately 20,000 active transistors (29,000 counting all ROM and PLA sites). It was soon moved to a new refined nMOS manufacturing process called HMOS (for High performance MOS) that Intel originally developed for manufacturing of fast static RAM products. This was followed by HMOS-II, HMOS-III versions, and, eventually, a fully static CMOS version for battery powered devices, manufactured using Intel's CHMOS processes. The original chip measured 33 mm² and minimum feature size was 3.2 μm.</p>
          <p>The architecture was defined by Stephen P. Morse with some help and assistance by Bruce Ravenel (the architect of the 8087) in refining the final revisions. Logic designer Jim McKevitt and John Bayliss were the lead engineers of the hardware-level development team and Bill Pohlman the manager for the project. The legacy of the 8086 is enduring in the basic instruction set of today's personal computers and servers; the 8086 also lent its last two digits to later extended versions of the design, such as the Intel 286 and the Intel 386, all of which eventually became known as the x86 family. (Another reference is that the PCI Vendor ID for Intel devices is 8086h.)</p>
        </section>
        <section id="selection-4">
          <h1>Buses and operation</h1>
          <p>All internal registers, as well as internal and external data buses, are 16 bits wide, which firmly established the "16-bit microprocessor" identity of the 8086. A 20-bit external address bus provides a 1 MB physical address space (220 = 1,048,576). This address space is addressed by means of internal memory "segmentation". The data bus is multiplexed with the address bus in order to fit all of the control lines into a standard 40-pin dual in-line package. It provides a 16-bit I/O address bus, supporting 64 KB of separate I/O space. The maximum linear address space is limited to 64 KB, simply because internal address/index registers are only 16 bits wide. Programming over 64 KB memory boundaries involves adjusting the segment registers (see below); this difficulty existed until the 80386 architecture introduced wider (32-bit) registers (the memory management hardware in the 80286 did not help in this regard, as its registers are still only 16 bits wide).</p>
        </section>
        <section id="selection-5">
          <h1>Hardware modes</h1>
          <p>Some of the control pins, which carry essential signals for all external operations, have more than one function depending upon whether the device is operated in min or max mode. The former mode is intended for small single-processor systems, while the latter is for medium or large systems using more than one processor (a kind of multiprocessor mode). Maximum mode is required when using an 8087 or 8089 coprocessor. The voltage on pin 33 (MN/MX) determine the mode. Changing the state of pin 33 changes the function of certain other pins, most of which have to do with how the CPU handles the (local) bus.  The mode is usually hardwired into the circuit and therefore cannot be changed by software. The workings of these modes are described in terms of timing diagrams in Intel datasheets and manuals. In minimum mode, all control signals are generated by the 8086 itself.</p>
        </section>
        <section id="selection-6">
          <h1>Registers and instructions</h1>
          <p>The 8086 has eight more or less general 16-bit registers (including the stack pointer but excluding the instruction pointer, flag register and segment registers). Four of them, AX, BX, CX, DX, can also be accessed as twice as many 8-bit registers (see figure) while the other four, SI, DI, BP, SP, are 16-bit only.</p>
          <p>Due to a compact encoding inspired by 8-bit processors, most instructions are one-address or two-address operations, which means that the result is stored in one of the operands. At most one of the operands can be in memory, but this memory operand can also be the destination, while the other operand, the source, can be either register or immediate. A single memory location can also often be used as both source and destination which, among other factors, further contributes to a code density comparable to (and often better than) most eight-bit machines at the time.</p>
          <p>The degree of generality of most registers are much greater than in the 8080 or 8085. However, 8086 registers were more specialized than in most contemporary minicomputers and are also used implicitly by some instructions. While perfectly sensible for the assembly programmer, this makes register allocation for compilers more complicated compared to more orthogonal 16-bit and 32-bit processors of the time such as the PDP-11, VAX, 68000, 32016 etc. On the other hand, being more regular than the rather minimalistic but ubiquitous 8-bit microprocessors such as the 6502, 6800, 6809, 8085, MCS-48, 8051, and other contemporary accumulator-based machines, it is significantly easier to construct an efficient code generator for the 8086 architecture.</p>
          <p>Another factor for this is that the 8086 also introduced some new instructions (not present in the 8080 and 8085) to better support stack-based high-level programming languages such as Pascal and PL/M; some of the more useful instructions are push mem-op, and ret size, supporting the "Pascal calling convention" directly. (Several others, such as push immed and enter, were added in the subsequent 80186, 80286, and 80386 processors.)</p>
          <p>A 64 KB (one segment) stack growing towards lower addresses is supported in hardware; 16-bit words are pushed onto the stack, and the top of the stack is pointed to by SS:SP. There are 256 interrupts, which can be invoked by both hardware and software. The interrupts can cascade, using the stack to store the return addresses.</p>
          <p>The 8086 has 64 K of 8-bit (or alternatively 32 K of 16-bit word) I/O port space.</p>
        </section>
      </article>
      <aside>
        <scroll-spy :items="['#selection-1', '#selection-2', '#selection-3', '#selection-4', '#selection-5', '#selection-6']" class="scroll-spy" tag="ul" active-class="active-class">
          <li><a href="#selection-1">Intel 8086</a></li>
          <li><a href="#selection-2">History</a></li>
          <li><a href="#selection-3">The first x86 design</a></li>
          <li><a href="#selection-4">Buses and operation</a></li>
          <li><a href="#selection-5">Hardware modes</a></li>
          <li><a href="#selection-6">Registers and instructions</a></li>
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
a {
  text-decoration: none;
  color: #34495e;
}

main {
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  position: relative;
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
  max-width: 900px;
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
.active-class a {
  font-weight: bold;
  color: #42b983;
}

</style>
